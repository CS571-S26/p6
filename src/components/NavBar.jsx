import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import '../styles/NavBar.css'
import logo from '../assets/obc_bike_sticker_gold_v2.webp'

function Logo() {
  return (
    <Navbar.Brand as={Link} to="/" aria-label="Oregon Bike Shop home">
      <img src={logo} alt="Oregon Bicycle Company" className="obs-logo-img" />
    </Navbar.Brand>
  )
}

export default function NavBar() {
  const [expanded, setExpanded] = useState(false)
  const collapseNav = () => setExpanded(false)

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} bg="white" className="obs-navbar border-bottom shadow-sm" sticky="top">
      <Container fluid="xl">
        <Logo />
        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">

            <Nav.Link as={Link} to="/shop" className="obs-nav-link" onClick={collapseNav}>Shop Bikes</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/services/repair" onClick={collapseNav}>Bike Service Repair</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/fitting" onClick={collapseNav}>Bike Fitting</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/trade-in" onClick={collapseNav}>Bike Trade In</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/kids-trade-up" onClick={collapseNav}>Kids&apos; Bike Trade Up</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="events-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/events" onClick={collapseNav}>All Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/group-rides" onClick={collapseNav}>Group Rides</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Us" id="about-dropdown" className="obs-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about" className="obs-dropdown-about-link" onClick={collapseNav}>About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about/hours" onClick={collapseNav}>Hours &amp; Location</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/contact" onClick={collapseNav}>Contact Us</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
