import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import ColoredHeading from '../components/ColoredHeading'
import '../styles/BikeServiceRepair.css'
import '../styles/WorkWithUs.css'

import heroImg from '../assets/workWithUs.webp'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const fd = new FormData(e.target)
    try {
      const res = await fetch(`${API}/api/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          resumeLink: fd.get('resumeLink'),
          coverLetter: fd.get('coverLetter'),
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
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Oregon Bike Shop team" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Work With Us</h1>
          <p className="obs-service-hero-sub">Join a team that loves bikes as much as you do.</p>
        </div>
      </div>

      <Container fluid="xl" className="py-5 wwu-form-container text-center">
        {/* Intro text */}
        <ColoredHeading text="We're Hiring" as="h2" className="text-center" />
        <hr className="obs-section-divider mx-auto" />
        <p className="obs-section-sub mx-auto mb-3" style={{ maxWidth: '40rem' }}>
          Oregon Bike Shop is a small, community-focused shop in Oregon, WI. We care about bikes, our neighbors, and doing good work. If that sounds like you, we&apos;d love to hear from you.
        </p>
        <p className="obs-section-sub mx-auto mb-5" style={{ maxWidth: '40rem' }}>
          We hire for mechanical, sales, and events roles throughout the year. Even if we don&apos;t have an opening right now, send us your info and we&apos;ll keep you in mind.
        </p>

        {/* Application Form */}
        <div className="wwu-form-wrap">
          {submitted ? (
            <p className="obs-form-success">
              Thanks for applying! We&apos;ll review your application and reach out if there&apos;s a good fit.
            </p>
          ) : (
            <Form onSubmit={handleSubmit} className="wwu-form">
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
                  Phone <span className="obs-form-optional">(optional)</span>
                </Form.Label>
                <Form.Control name="phone" type="tel" placeholder="(608) 555-0100" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Resume Link</Form.Label>
                <Form.Control name="resumeLink" type="url" placeholder="https://linkedin.com/in/yourname" required />
                <Form.Text className="obs-form-help">
                  Link to a LinkedIn profile, Google Doc, or any publicly accessible resume.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control
                  name="coverLetter"
                  as="textarea"
                  rows={7}
                  placeholder="Tell us a bit about yourself, your experience with bikes, and why you'd like to join the team."
                  required
                />
              </Form.Group>

              {error && (
                <p className="obs-form-error">{error}</p>
              )}

              <div className="text-center">
                <Button type="submit" disabled={loading} className="obs-btn-shop">
                  {loading ? 'Submitting…' : 'Submit Application'}
                </Button>
              </div>
            </Form>
          )}
        </div>
      </Container>
    </div>
  )
}
