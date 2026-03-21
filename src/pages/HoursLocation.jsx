import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/HoursLocation.css'
import '../styles/BikeServiceRepair.css'
import heroImg from '../assets/fullBuildingOutside.webp'
import HoursLocationWidget from '../components/HoursLocationWidget'

export default function HoursLocation() {
  return (
    <>
      {/* Hero banner image */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Oregon Bicycle Company building" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Hours &amp; Location</h1>
          <p className="obs-service-hero-sub">Come visit us in Oregon, Wisconsin.</p>
        </div>
      </div>

      <Container className="py-5">
        <HoursLocationWidget />

        {/* Contact Us button */}
        <div className="text-center mt-5">
          <Button
            as={Link}
            to="/about/contact"
            variant="outline-primary"
            size="lg"
            className="contact-btn"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </>
  )
}
