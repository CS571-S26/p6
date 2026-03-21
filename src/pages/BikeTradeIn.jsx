import { Fragment } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '1',
    title: 'Bring It In',
    description: 'Drop off your bike at the shop. We\'ll take a look at what you\'ve got — any brand, any condition.',
  },
  {
    number: '2',
    title: 'Get an Offer',
    description: 'One of our staff will assess the bike and give you a fair trade-in credit on the spot. No haggling.',
  },
  {
    number: '3',
    title: 'Ride Something New',
    description: 'Apply your credit toward any bike in the shop. Upgrade to something that fits where you\'re headed.',
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

export default function BikeTradeIn() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', maxHeight: '420px', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/tradein/1400/420"
          alt="Bikes in the shop"
          style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.42)',
          display: 'flex', alignItems: 'center',
        }}>
          <Container>
            <h1 style={{ color: '#fff', margin: 0 }}>Bike Trade In</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '12px', maxWidth: '520px', fontSize: '18px' }}>
              Ready to move on? We'll give your old bike a second life and put credit toward your next ride.
            </p>
          </Container>
        </div>
      </div>

      {/* Steps */}
      <Container className="py-5">
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center gap-3 gap-md-0">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div
                style={{ maxWidth: '220px', textAlign: 'center', padding: '0 16px' }}
              >
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
                  key={`icon-${i}`}
                  className="d-flex align-items-center justify-content-center"
                  style={{ padding: '0 8px', transform: 'rotate(0deg)' }}
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
