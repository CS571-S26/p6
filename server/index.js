import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    await transporter.sendMail({
      from: `"OBS Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        ``,
        message,
      ].filter(line => line !== null).join('\n'),
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
})

// POST /api/apply
app.post('/api/apply', async (req, res) => {
  const { name, email, phone, resumeLink, coverLetter } = req.body

  if (!name || !email || !resumeLink || !coverLetter) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    await transporter.sendMail({
      from: `"OBS Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Job application: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Resume: ${resumeLink}`,
        ``,
        coverLetter,
      ].filter(line => line !== null).join('\n'),
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Apply email error:', err)
    res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
