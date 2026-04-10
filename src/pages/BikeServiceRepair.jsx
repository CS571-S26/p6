import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import ColoredHeading from "../components/ColoredHeading";
import "../styles/BikeServiceRepair.css";

import heroImg from "../assets/zoomedOutService.webp";

const tuneUps = [
  {
    name: "Standard Tune",
    price: "$139",
    features: [
      "Wipe down frame",
      "Check drivetrain wear",
      "Bearing adjustments and assessment for wear",
      "Tighten and torque hubs, cranks, pedals, headset and bolts to specification",
      "Shift & braking adjustments",
      "Wheel true check performed on bike",
      "Lubricate chain",
      "Safety check",
    ],
  },
  {
    name: "E-Bike",
    price: "$169",
    description:
      "We service E-bike electrical systems from TQ, Hyena, and Bosch. Please inquire about any other brands. We can support mechanical repairs on all brands but may not be equipped to deal with software and electrical issues. We cannot source off brand electrical parts and batteries.",
    features: [
      "Wipe down frame",
      "Check drivetrain wear",
      "Bearing adjustments and assessment for wear",
      "Tighten and torque hubs, cranks, pedals, headset and bolts to specification",
      "Shift & braking adjustments",
      "Wheel true check performed on bike",
      "Lubricate chain",
      "Safety check",
      "Check firmware and update",
    ],
  },
  {
    name: "Advanced Tune",
    price: "$229",
    features: [
      "Full bike cleaning",
      "Chain strip and prep",
      "Apply chain lube or wax",
      "Check drivetrain wear",
      "Drivetrain removed and cleaned",
      "Bearing adjustments and assessment for wear",
      "Tighten and torque hubs, cranks, pedals, headset and bolts to specification",
      "Shift & braking adjustments",
      "Wheels trued and tensioned off bike",
      "Safety check",
    ],
  },
  {
    name: "Complete Overhaul",
    price: "Custom",
    description:
      "Price and work performed based on assessment of bicycle.",
    features: [],
  },
];

const alaCarte = [
  { service: "Shift Adjustment, Rear", price: "$19" },
  { service: "Brake Adjustment, Single Disc", price: "$19" },
  { service: "Brake Bleed, Each", price: "$35" },
  { service: "Tire / Tube Install, Single*", price: "$15" },
  { service: "E-Bike Tire / Tube Install, Single*\u2020", price: "Up to $55" },
  { service: "Tubeless Set-up, Single 2oz/4oz/6oz", price: "$13.50/$20/$21" },
  { service: "Handlebar Wrap*", price: "$21" },
  { service: "Bike Wash", price: "$50" },
  { service: "Chain Wax", price: "$40" },
  { service: "Boxed Bike Build", price: "$135" },
  { service: "Boxed E-Bike Build", price: "$189" },
  { service: "Kid's/BMX Bike Tune-Up*", price: "$50" },
  { service: "Shop Rate", price: "$90/hr" },
];

export default function BikeServiceRepair() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img
          src={heroImg}
          alt="Bike workshop"
          className="obs-service-hero-img"
        />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Bike Service &amp; Repair</h1>
          <p className="obs-service-hero-sub">
            Expert care for every type of rider and every type of bike.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <Container fluid="xl" className="py-5">
        {/* Intro */}
        <p className="obs-intro-text mb-2">
          At Oregon Bicycle Company, we work on all brands and types of bikes.
          Whether you are competing for a championship or just want to ride
          around the neighborhood on a properly functioning bicycle, we are here
          to help. Many minor repairs can be done while you wait. Grab a coffee,
          a beer, a couple tacos&hellip;sit at the bar and connect with the
          mechanic while they take care of your bicycle.
        </p>

        <Row className="text-start gx-5 gy-5">
          {/* Tune-Up Packages */}
          <Col lg={8}>
            <ColoredHeading text="Tune-Up Packages" as="h2" />
            <hr className="obs-section-divider" />
            <Accordion flush>
              {tuneUps.map((pkg, idx) => (
                <Accordion.Item
                  eventKey={String(idx)}
                  key={pkg.name}
                  className="obs-accordion-item"
                >
                  <Accordion.Header>
                    <span className="obs-accordion-name">{pkg.name}</span>
                    <span className="obs-accordion-price">{pkg.price}</span>
                  </Accordion.Header>
                  <Accordion.Body className="obs-accordion-body">
                    {pkg.description && <p className="mb-3">{pkg.description}</p>}
                    {pkg.features.length > 0 && (
                      <>
                        <p className="obs-includes-label mb-2">Includes:</p>
                        <ul className="obs-feature-list mb-4">
                          {pkg.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    <Button
                      as={Link}
                      to="/about/hours"
                      className="obs-btn-shop"
                    >
                      Come Visit Us
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            {/* Warranty Claims */}
            <div className="obs-warranty-box mt-5">
              <ColoredHeading text="Warranty Claims" as="h2" />
              <hr className="obs-section-divider" />
              <p className="obs-section-sub mb-0">
                We are here to help submit warranty claims for all bike brands
                we carry. The bike owner is financially responsible for
                replacement parts and labor if the case is not warrantable. The
                warranty process is subject to our hourly service rate for labor
                not covered by the manufacturer. This includes time spent
                evaluating damage, gathering claim materials, and corresponding
                with the manufacturer. The bicycle owner is responsible for any
                necessary shipping charges unless covered by the manufacturer
                under warranty. Proof of purchase is required for all warranty
                claims.
              </p>
            </div>
          </Col>

          {/* A La Carte Sidebar */}
          <Col lg={4}>
            <div className="obs-sidebar">
              <ColoredHeading text="A La Carte Services" as="h2" />
              <hr className="obs-section-divider" />
              <p className="obs-section-sub">
                Additional services are available. Prices are subject to change.
              </p>
              <table className="obs-alacarte-table mb-3">
                <tbody>
                  {alaCarte.map(({ service, price }) => (
                    <tr key={service}>
                      <td>{service}</td>
                      <td>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="obs-note mb-1">
                *Parts and materials not included.
              </p>
              <p className="obs-note mb-4">
                &dagger;Dependent on wheel size and configuration.
              </p>
              <Button
                as={Link}
                to="/about/hours"
                className="obs-btn-shop w-100"
              >
                Come Visit Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
