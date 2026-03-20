import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

const BASE = import.meta.env.BASE_URL;

function Logo() {
  return (
    <a
      href={BASE}
      className="obs-footer-logo d-flex align-items-center gap-2 text-decoration-none mb-3"
    >
      <div className="obs-logo-mark">OBS</div>
    </a>
  );
}

const footerSections = [
  {
    title: "Shop",
    links: [{ label: "Shop Bikes", href: `${BASE}shop` }],
  },
  {
    title: "Services",
    links: [
      { label: "Bike Service Repair", href: `${BASE}services/repair` },
      { label: "Bike Fitting", href: `${BASE}services/fitting` },
      { label: "Bike Trade In", href: `${BASE}services/trade-in` },
      { label: "Kids' Bike Trade Up", href: `${BASE}services/kids-trade-up` },
    ],
  },
  {
    title: "Events",
    links: [{ label: "Events", href: `${BASE}events` }],
  },
  {
    title: "About Us",
    links: [
      { label: "Hours & Location", href: `${BASE}about/hours` },
      { label: "Contact Us", href: `${BASE}about/contact` },
      { label: "Work With Us", href: `${BASE}about/work-with-us` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="obs-footer">
      <Container fluid="xl">
        <Row className="obs-footer-main py-5 gy-4">
          {/* Brand column */}
          <Col xs={12} md={4} lg={3}>
            <Logo />
            <p className="obs-footer-tagline">
              Your local bike shop in Oregon.
              <br />
              Ride more, worry less.
            </p>
          </Col>

          {/* Spacer on large screens to push links rightward */}
          <Col lg={1} className="d-none d-lg-block" />

          {/* Links grid */}
          <Col xs={12} md={8} lg={8}>
            <Row className="gy-4">
              {footerSections.map((section) => (
                <Col key={section.title} xs={12} sm={6} md={3}>
                  <h6 className="obs-footer-heading">{section.title}</h6>
                  <ul className="list-unstyled obs-footer-links">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="obs-footer-link">
                          {link.label}
                        </a>
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
            &copy; {new Date().getFullYear()} Oregon Bike Shop. All rights
            reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
