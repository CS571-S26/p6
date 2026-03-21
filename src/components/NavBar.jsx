import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import '../styles/NavBar.css'
import logo from '../assets/OBC_logo_black_no_shadows_all_black.png'

function Logo() {
  return (
    <Navbar.Brand as={Link} to="/" aria-label="Oregon Bike Shop home">
      <img src={logo} alt="Oregon Bicycle Company" className="obs-logo-img" />
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

            <Nav.Link as={Link} to="/shop" className="obs-nav-link">Shop Bikes</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/services/repair">Bike Service Repair</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/fitting">Bike Fitting</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/trade-in">Bike Trade In</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/kids-trade-up">Kids&apos; Bike Trade Up</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="events-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/events">All Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/group-rides">Group Rides</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Us" id="about-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about" className="obs-dropdown-about-link">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about/hours">Hours &amp; Location</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
