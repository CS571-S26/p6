import { Link } from 'react-router-dom'
import { Container, Accordion, Button } from 'react-bootstrap'
import ColoredHeading from '../components/ColoredHeading'
import '../styles/BikeServiceRepair.css'

import heroImg from '../assets/bikeFitting.webp'

const fittings = [
  {
    name: 'Standard Fit',
    price: '$',
    features: [
      'Personal interview',
      'Adjust seat height',
      'Adjust fore/aft seat position',
      'Adjust handlebar reach',
      'Adjust handlebar height',
    ],
  },
  {
    name: 'Advanced Fit',
    price: '$$',
    note: 'Standard Fit, plus:',
    features: [
      'Flexibility assessment',
      'Measure and adjust handlebar width',
      'Pedal/cleat alignment',
      'Printed copy of bike measurements',
    ],
  },
  {
    name: 'Dynamic Fit',
    price: '$$$',
    note: 'Advanced Fit, plus:',
    features: [
      'Video analysis of dynamic cycling position',
      'Adjustment of all measurements based on video analysis',
      'Aerobar setup (optional)',
    ],
  },
]

export default function BikeFitting() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Bike fitting session" className="obs-service-hero-img" style={{ objectPosition: 'center 75%' }} />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Bike Fitting</h1>
          <p className="obs-service-hero-sub">Improve your comfort &amp; performance.</p>
        </div>
      </div>

      <Container fluid="xl" className="py-5">
        {/* Intro */}
        <p className="obs-intro-text mb-2">
          Regardless of what type of cycling you enjoy, you&apos;ll benefit from a bike that has been properly adjusted to fit your body and your riding style. Our certified fit specialists will discuss your cycling history and goals, then work with you to determine your ideal riding position.
        </p>
        <p className="obs-intro-text mb-5">
          With a professional bike fit, you can be more comfortable, more efficient, and more powerful on every ride. You&apos;ll also be less likely to sustain injuries on a bike that has been expertly configured to meet your needs.
        </p>

        {/* Fit Options */}
        <ColoredHeading text="Bike Fit Options" as="h2" />
        <hr className="obs-section-divider" />
        <p className="obs-section-sub">
          Whether you&apos;re on a brand new bike or looking to shave seconds off your next race, you can benefit from a professional bike fit.
        </p>
        <Accordion flush>
          {fittings.map((fit, idx) => (
            <Accordion.Item eventKey={String(idx)} key={fit.name} className="obs-accordion-item">
              <Accordion.Header>
                <span className="obs-accordion-name">{fit.name}</span>
                <span className="obs-accordion-price">{fit.price}</span>
              </Accordion.Header>
              <Accordion.Body className="obs-accordion-body">
                {fit.note && (
                  <p className="obs-includes-label mb-2">
                    {fit.note}
                  </p>
                )}
                <ul className="obs-feature-list mb-4">
                  {fit.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button as={Link} to="/about/hours" className="obs-btn-shop">Come Visit Us</Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  )
}
