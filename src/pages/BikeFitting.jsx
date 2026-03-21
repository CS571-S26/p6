import { Container, Accordion, Button } from 'react-bootstrap'
import '../styles/BikeServiceRepair.css'

import heroImg from '../assets/bikeFitting.webp'

const fittings = [
  {
    name: 'Basic Fit',
    price: '$XX',
    description:
      'A great starting point for new riders or anyone looking to improve comfort on their current setup. We assess saddle height, fore-aft position, and handlebar reach.',
    features: [
      'Saddle height & fore-aft adjustment',
      'Handlebar height & reach',
      'Cleat alignment (if applicable)',
      'Ride-away adjustments included',
    ],
  },
  {
    name: 'Performance Fit',
    price: '$XX',
    description:
      'A comprehensive fit for road, gravel, or mountain riders who want to maximize efficiency and power output without sacrificing comfort.',
    features: [
      'Full body measurement & flexibility assessment',
      'Saddle, stem, and handlebar optimization',
      'Cleat setup & knee tracking analysis',
      'Video analysis of pedal stroke',
      'Written fit report to take home',
    ],
  },
  {
    name: 'Follow-Up Fit',
    price: '$XX',
    description:
      'Already had a fit with us? This session covers adjustments after a bike change, injury recovery, or significant changes in flexibility or fitness.',
    features: [
      'Review of previous fit notes',
      'Position re-assessment',
      'Fine-tuning of existing setup',
      'Updated fit report',
    ],
  },
]

export default function BikeFitting() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Bike fitting session" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Bike Fitting</h1>
          <p className="obs-service-hero-sub">Ride farther, feel better. A proper fit makes all the difference.</p>
        </div>
      </div>

      {/* Page Content */}
      <Container fluid="xl" className="py-5">
        <h2 className="obs-section-title">Fit Packages</h2>
        <hr className="obs-section-divider" />
        <p className="obs-section-sub">Click any package to see what&apos;s included.</p>
        <Accordion flush>
          {fittings.map((fit, idx) => (
            <Accordion.Item eventKey={String(idx)} key={fit.name} className="obs-accordion-item">
              <Accordion.Header>
                <span className="obs-accordion-name">{fit.name}</span>
                <span className="obs-accordion-price">{fit.price}</span>
              </Accordion.Header>
              <Accordion.Body className="obs-accordion-body">
                <p className="mb-3">{fit.description}</p>
                <ul className="obs-feature-list mb-4">
                  {fit.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button className="obs-btn-shop">Come Visit Us</Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  )
}
