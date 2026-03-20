import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import '../styles/BikeServiceRepair.css'

// TODO: replace with a real shop/team photo
import heroImg from '../assets/hero.png'

export default function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Oregon Bike Shop team" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Work With Us</h1>
          <p className="obs-service-hero-sub">Join a team that loves bikes as much as you do.</p>
        </div>
      </div>

      <Container fluid="xl" className="py-5" style={{ maxWidth: '640px' }}>
        {/* Intro text */}
        <h2 className="obs-section-title">We&apos;re Hiring</h2>
        <hr className="obs-section-divider" />
        <p className="obs-section-sub" style={{ marginBottom: '12px' }}>
          Oregon Bike Shop is a small, community-focused shop in Oregon, WI. We care about bikes, our neighbors, and doing good work. If that sounds like you, we&apos;d love to hear from you.
        </p>
        <p className="obs-section-sub" style={{ marginBottom: '32px' }}>
          We hire for mechanical, sales, and events roles throughout the year. Even if we don&apos;t have an opening right now, send us your info and we&apos;ll keep you in mind.
        </p>

        {/* Application Form */}
        {submitted ? (
          <p style={{ color: '#3b6e2a', fontWeight: 600, fontSize: '16px' }}>
            Thanks for applying! We&apos;ll review your application and reach out if there&apos;s a good fit.
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

            <Form.Group className="mb-3">
              <Form.Label>Resume Link</Form.Label>
              <Form.Control type="url" placeholder="https://linkedin.com/in/yourname" required />
              <Form.Text style={{ color: '#6b5f52' }}>
                Link to a LinkedIn profile, Google Doc, or any publicly accessible resume.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="Tell us a bit about yourself, your experience with bikes, and why you'd like to join the team."
                required
              />
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
              Submit Application
            </Button>
          </Form>
        )}
      </Container>
    </div>
  )
}
