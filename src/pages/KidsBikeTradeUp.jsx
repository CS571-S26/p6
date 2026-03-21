import { Fragment } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import heroImg from '../assets/kidTradeUp.webp'

const steps = [
  {
    number: '1',
    title: 'Bring the Old Bike',
    description: 'Drop off your child\'s current bike — any brand, any size. We\'ll check it over and make sure it\'s safe to pass along.',
  },
  {
    number: '2',
    title: 'Pick the Right Size',
    description: 'Our staff will fit your kid for the next size up, so they\'re comfortable and confident right away.',
  },
  {
    number: '3',
    title: 'Trade Up & Ride',
    description: 'Apply your trade-in credit to a new bike and head outside. Kids grow fast — we make it easy to keep up.',
  },
]

function BikeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 32"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: '56px', flexShrink: 0 }}
    >
      <circle cx="10" cy="22" r="8" />
      <circle cx="54" cy="22" r="8" />
      <path d="M10 22 L22 6 L36 6" />
      <path d="M36 6 L42 22 L10 22" />
      <path d="M36 6 L54 22" />
      <path d="M30 6 L32 2 L38 2" />
    </svg>
  )
}

export default function KidsBikeTradeUp() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', maxHeight: '420px', overflow: 'hidden' }}>
        <img
          src={heroImg}
          alt="Kids on bikes"
          style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.42)',
          display: 'flex', alignItems: 'center',
        }}>
          <Container>
            <h1 style={{ color: '#fff', margin: 0 }}>Kids&apos; Bike Trade Up</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '12px', maxWidth: '520px', fontSize: '18px' }}>
              Kids outgrow bikes fast. Bring in the old one and we&apos;ll set them up with the right size for where they&apos;re headed next.
            </p>
          </Container>
        </div>
      </div>

      {/* Steps */}
      <Container className="py-5">
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center gap-3 gap-md-0">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div style={{ maxWidth: '220px', textAlign: 'center', padding: '0 16px' }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '12px',
                }}>
                  {step.number}
                </div>
                <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>{step.title}</h2>
                <p style={{ fontSize: '15px', color: 'var(--text)' }}>{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ padding: '0 8px' }}
                >
                  <BikeIcon />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-5 pt-3 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Come in to see how we can help you.
          </p>
          <Button as={Link} to="/about/hours" variant="outline-secondary">
            Hours &amp; Location
          </Button>
        </div>
      </Container>
    </>
  )
}
