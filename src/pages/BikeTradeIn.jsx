import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/BikeServiceRepair.css'

import heroImg from '../assets/weLoveAllBikes.webp'

const steps = [
  {
    number: '1',
    text: 'Dust off your old bike and bring it to us.',
  },
  {
    number: '2',
    text: 'Shop for a new bike while we evaluate your trade-in.',
  },
  {
    number: '3',
    text: 'Turn your store credit into a new bike and go ride!',
  },
]

export default function BikeTradeIn() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Bikes in the shop" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Bike Trade-In Program</h1>
          <p className="obs-service-hero-sub">Trade in and trade up today.</p>
        </div>
      </div>

      <Container fluid="xl" className="py-5">
        {/* Intro */}
        <p className="obs-intro-text mb-2">
          Are you looking for a new bike but don&apos;t know what to do with your old one? Excellent news: we accept bike trade-ins. Clean up that older bike that&apos;s been hanging in your garage, bring it to us for a fast and easy evaluation, and get credit towards the bike of your dreams.
        </p>

        {/* How It Works */}
        <h2 className="obs-section-title mt-5">How It Works</h2>
        <hr className="obs-section-divider" />
        <p className="obs-intro-text mb-5">
          Turning your current bike into credit towards a new model couldn&apos;t be easier. We have a straightforward process that ensures you receive fair market value and helps you avoid the hassle of listing your bike online. Visit us today to learn more.
        </p>

        {/* Steps */}
        <div className="obs-steps">
          {steps.map((step) => (
            <div key={step.number} className="obs-step">
              <div className="obs-step-number">{step.number}</div>
              <p className="obs-step-text">{step.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="obs-tradein-cta">
          <p>Contact us about our bike trade-in program today.</p>
          <Button as={Link} to="/about/contact" className="obs-btn-shop">
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  )
}
