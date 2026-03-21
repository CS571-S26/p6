import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/BikeServiceRepair.css'

import heroImg from '../assets/kidTradeUp.webp'
import whyImg from '../assets/bikeGroupWithHandsInAir.webp'

const steps = [
  {
    number: '1',
    text: 'Bring in your child\'s current bike for a fast and easy evaluation.',
  },
  {
    number: '2',
    text: 'Shop for the next size up while we assess your trade-in.',
  },
  {
    number: '3',
    text: 'Apply up to 50% of the original price as credit and ride!',
  },
]

export default function KidsBikeTradeUp() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Kids on bikes" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Kids&apos; Bike Trade-Up</h1>
          <p className="obs-service-hero-sub">Kids grow fast. We&apos;re here to help.</p>
        </div>
      </div>

      <Container fluid="xl" className="py-5">
        {/* Intro */}
        <p className="obs-intro-text mb-5">
          Thanks to our Kids&apos; Bike Trade-Up Program, your child can ride a high quality bike that fits well despite those unexpected growth spurts. When your little cyclist is ready for the next bike size, we&apos;ll give you up to <strong>50% of your original bike purchase</strong> as a credit towards a bigger kids&apos; bike.
        </p>

        {/* Why Choose Us */}
        <Row className="align-items-center gx-5 mb-5 pb-5 obs-section-row-divided">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={whyImg}
              alt="Family enjoying a bike ride"
              className="obs-content-img"
            />
          </Col>
          <Col md={6}>
            <h2 className="obs-section-title">Why Choose Our Bike Shop?</h2>
            <hr className="obs-section-divider" />
            <p className="obs-intro-text">
              The kids&apos; bikes we carry are designed with the same level of detail that goes into our adult bikes. They feature lightweight frames and durable components, making them fun and safe for your child. We also have a sweet selection of sizes and colors — all fine-tuned by professional mechanics and ready for you.
            </p>
          </Col>
        </Row>

        {/* How It Works */}
        <h2 className="obs-section-title mt-2">How Does Trading Up Work?</h2>
        <hr className="obs-section-divider" />
        <p className="obs-intro-text mb-4">
          Our Kids&apos; Bike Trade-Up Program is simple — invest in a quality bike today, and bring it back to us when your child is ready for the next size. This program is valid until your child is ready for an adult bike!
        </p>

        <div className="obs-steps mb-5">
          {steps.map((step) => (
            <div key={step.number} className="obs-step">
              <div className="obs-step-number">{step.number}</div>
              <p className="obs-step-text">{step.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="obs-tradein-cta">
          <p>Come in and ask us about the Kids&apos; Bike Trade-Up Program today.</p>
          <Button as={Link} to="/about/contact" className="obs-btn-shop">
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  )
}
