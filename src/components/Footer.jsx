import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Footer.css'
import logo from '../assets/light bike shop logo vector.webp'

function Logo() {
  return (
    <Link to="/" className="obs-footer-logo d-flex align-items-center gap-2 text-decoration-none mb-3">
      <img src={logo} alt="Oregon Bicycle Company" className="obs-footer-logo-img" />
    </Link>
  )
}

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'Shop Bikes', to: '/shop' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Bike Service Repair', to: '/services/repair' },
      { label: 'Bike Fitting', to: '/services/fitting' },
      { label: 'Bike Trade In', to: '/services/trade-in' },
      { label: "Kids' Bike Trade Up", to: '/services/kids-trade-up' },
    ],
  },
  {
    title: 'Events',
    links: [
      { label: 'All Events', to: '/events' },
      { label: 'Group Rides', to: '/events/group-rides' },
    ],
  },
  {
    title: 'About Us',
    to: '/about',
    links: [
      { label: 'Hours & Location', to: '/about/hours' },
      { label: 'Contact Us', to: '/about/contact' },
      { label: 'Work With Us', to: '/about/work-with-us' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="obs-footer">
      <Container fluid="xl">
        <Row className="obs-footer-main py-5 gy-4">
          {/* Brand column */}
          <Col xs={12} md={4} lg={3}>
            <Logo />
            <p className="obs-footer-tagline">
              Your local bike shop in Oregon.<br />
              Ride more, worry less.
            </p>
          </Col>

          {/* Spacer on large screens */}
          <Col lg={1} className="d-none d-lg-block" />

          {/* Links grid */}
          <Col xs={12} md={8} lg={8}>
            <Row className="gy-4">
              {footerSections.map((section) => (
                <Col key={section.title} xs={12} sm={6} md={3}>
                  {section.to ? (
                    <Link to={section.to} className="obs-footer-heading-link">
                      <h6 className="obs-footer-heading">{section.title}</h6>
                    </Link>
                  ) : (
                    <h6 className="obs-footer-heading">{section.title}</h6>
                  )}
                  <ul className="list-unstyled obs-footer-links">
                    {section.links.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="obs-footer-link">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Bottom bar */}
      <div className="obs-footer-bottom">
        <Container fluid="xl">
          <p className="mb-0 text-center obs-footer-copy">
            &copy; {new Date().getFullYear()} Oregon Bike Shop. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
