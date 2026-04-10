import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import ColoredHeading from './ColoredHeading'
import '../styles/ContactUs.css'

export default function ContactUsForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const fd = new FormData(e.target)
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          message: fd.get('message'),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="py-5 contact-container text-center">
      <ColoredHeading text="Contact Us" className="text-center" />
      <p className="contact-intro mx-auto">
        Have a question about a repair, fit appointment, or anything else? Send us a message and we&apos;ll get back to you soon.
      </p>

      <div className="contact-form-wrap">
        {submitted ? (
          <p className="contact-success">
            Thanks for reaching out! We&apos;ll be in touch soon.
          </p>
        ) : (
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Your name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="your@email.com" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Phone <span className="contact-optional">(optional)</span>
              </Form.Label>
              <Form.Control name="phone" type="tel" placeholder="(608) 555-0100" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control name="message" as="textarea" rows={5} placeholder="What can we help you with?" required />
            </Form.Group>

            {error && (
              <p className="contact-error">{error}</p>
            )}

            <Button type="submit" disabled={loading} className="contact-btn">
              {loading ? 'Sending…' : 'Send Message'}
            </Button>
          </Form>
        )}
      </div>
    </Container>
  )
}
