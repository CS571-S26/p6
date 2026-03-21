import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container className="py-5" style={{ maxWidth: '600px', textAlign: 'left' }}>
      <h1>Contact Us</h1>
      <p style={{ marginBottom: '32px' }}>
        Have a question about a repair, fit appointment, or anything else? Send us a message and we&apos;ll get back to you soon.
      </p>

      {submitted ? (
        <p style={{ color: '#3b6e2a', fontWeight: 600, fontSize: '16px' }}>
          Thanks for reaching out! We&apos;ll be in touch soon.
        </p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="your@email.com" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Phone <span style={{ fontWeight: 400, color: '#6b5f52' }}>(optional)</span>
            </Form.Label>
            <Form.Control type="tel" placeholder="(608) 555-0100" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="What can we help you with?" required />
          </Form.Group>

          <Button
            type="submit"
            style={{
              background: '#3b6e2a',
              border: 'none',
              borderRadius: '3px',
              fontWeight: 600,
              padding: '10px 28px',
              letterSpacing: '0.3px',
            }}
          >
            Send Message
          </Button>
        </Form>
      )}
    </Container>
  )
}
