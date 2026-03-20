import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './NavBar.css'

const BASE = import.meta.env.BASE_URL

function Logo() {
  return (
    <Navbar.Brand href={BASE} aria-label="Oregon Bike Shop home">
      <div className="obs-logo-mark">OBS</div>
    </Navbar.Brand>
  )
}

export default function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="obs-navbar border-bottom shadow-sm" sticky="top">
      <Container fluid="xl">
        <Logo />
        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">

            <Nav.Link href={`${BASE}shop`} className="obs-nav-link">Shop Bikes</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item href={`${BASE}services/repair`}>Bike Service Repair</NavDropdown.Item>
              <NavDropdown.Item href={`${BASE}services/fitting`}>Bike Fitting</NavDropdown.Item>
              <NavDropdown.Item href={`${BASE}services/trade-in`}>Bike Trade In</NavDropdown.Item>
              <NavDropdown.Item href={`${BASE}services/kids-trade-up`}>Kids&apos; Bike Trade Up</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href={`${BASE}events`} className="obs-nav-link">Events</Nav.Link>

            <NavDropdown title="About Us" id="about-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item href={`${BASE}about`} className="obs-dropdown-about-link">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`${BASE}about/hours`}>Hours &amp; Location</NavDropdown.Item>
              <NavDropdown.Item href={`${BASE}about/contact`}>Contact Us</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
