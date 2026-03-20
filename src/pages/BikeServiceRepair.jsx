import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import '../styles/BikeServiceRepair.css'

// TODO: replace with a real bike shop/workshop photo
import heroImg from '../assets/hero.png'

const tuneUps = [
  {
    name: 'Standard Tune-Up',
    price: '$100',
    description:
      'For basic bikes like cruisers and entry-level road bikes. Includes full cleaning, bearing adjustments, torque specifications, shift and brake tuning, wheel checks, and lubrication.',
    features: [
      'Complete frame, drivetrain, chain & brake cleaning',
      'Bearing adjustments & torque specifications',
      'Shift & brake tuning',
      'Wheel checks & lubrication',
    ],
    note: 'Not available for e-bikes, tri bikes, full-suspension, or electronic shifting models.',
  },
  {
    name: 'eBike Tune-Up',
    price: '$150',
    description:
      'Certified for Bosch, Shimano, and Bafang motors. All standard cleaning and adjustments plus motor-specific care.',
    features: [
      'Complete frame, drivetrain, chain & brake cleaning',
      'Bearing adjustments & torque specifications',
      'Shift & brake tuning',
      'Firmware & software updates',
      'Battery life assessment',
    ],
  },
  {
    name: 'Full Suspension Bike Tune-Up',
    price: '$150',
    description:
      'Suspension-specific service including linkage cleaning, chain waxing, and firmware updates where applicable.',
    features: [
      'Complete frame, drivetrain, chain & brake cleaning',
      'Suspension linkage cleaning & inspection',
      'Chain waxing options',
      'Bearing adjustments & torque specifications',
      'Firmware updates where applicable',
    ],
  },
  {
    name: 'Tri Bike Tune-Up',
    price: '$150',
    description:
      'Race-ready service with chain strip and lubricant prep, electronic shifting compatibility, and full drivetrain tuning.',
    features: [
      'Complete frame, drivetrain, chain & brake cleaning',
      'Chain strip and prep for lubricant',
      'Bearing adjustments & torque specifications',
      'Electronic shifting compatibility',
    ],
  },
  {
    name: 'Performance Bike Tune-Up',
    price: '$150',
    description:
      'For carbon road/gravel and titanium bikes with comprehensive drivetrain removal and off-bike wheel truing.',
    features: [
      'Comprehensive cleaning with drivetrain removal',
      'Off-bike wheel truing',
      'Bearing adjustments & torque specifications',
      'Shift & brake tuning',
    ],
  },
  {
    name: 'Premium Tune-Up',
    price: '$250',
    description:
      'Our most thorough service — a full tear-down with headset disassembly, frame polishing, cable replacement, brake bleeding, and tubeless reset.',
    features: [
      'Headset disassembly & cleaning',
      'Full drivetrain removal & deep clean',
      'Frame polishing',
      'Cable replacement',
      'Brake bleeding',
      'Tubeless reset with sealant choice',
    ],
  },
]

export default function BikeServiceRepair() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Bike workshop" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Bike Service &amp; Repair</h1>
          <p className="obs-service-hero-sub">Expert care for every type of rider and every type of bike.</p>
        </div>
      </div>

      {/* Page Content */}
      <Container fluid="xl" className="py-5">
        <Row className="text-start gx-5 gy-5">

          {/* Tune-Up Packages */}
          <Col lg={8}>
            <h2 className="obs-section-title">Tune-Up Packages</h2>
            <hr className="obs-section-divider" />
            <p className="obs-section-sub">Click any package to see what&apos;s included.</p>
            <Accordion flush>
              {tuneUps.map((pkg, idx) => (
                <Accordion.Item eventKey={String(idx)} key={pkg.name} className="obs-accordion-item">
                  <Accordion.Header>
                    <span className="obs-accordion-name">{pkg.name}</span>
                    <span className="obs-accordion-price">{pkg.price}</span>
                  </Accordion.Header>
                  <Accordion.Body className="obs-accordion-body">
                    <p className="mb-3">{pkg.description}</p>
                    <ul className="obs-feature-list mb-4">
                      {pkg.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    {pkg.note && (
                      <p className="obs-note mb-4">{pkg.note}</p>
                    )}
                    <Button className="obs-btn-shop">Come Visit Us</Button>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          {/* A La Carte Sidebar */}
          <Col lg={4}>
            <div className="obs-sidebar">
              <h2 className="obs-section-title">A La Carte</h2>
              <hr className="obs-section-divider" />
              <p className="obs-section-sub">Need just one thing fixed? We&apos;ve got you.</p>
              <ul className="obs-feature-list mb-4">
                <li>Adjustments starting at <strong>$15</strong></li>
                <li>Cable replacements &amp; housing</li>
                <li>Brake bleeding</li>
                <li>Wheel truing &amp; spoke replacement</li>
                <li>Flat repair &amp; tubeless setup</li>
                <li>Fork service up to <strong>$200</strong></li>
                <li>Full custom builds</li>
              </ul>
              <div className="obs-rate-box">
                <p>Shop rate: <strong>$100/hour</strong>. Not sure what your bike needs? Bring it in and we&apos;ll take a look — no charge to talk it over.</p>
              </div>
              <Button className="obs-btn-shop w-100">Come Visit Us</Button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}
