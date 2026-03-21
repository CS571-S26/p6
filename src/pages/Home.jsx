import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import heroImg from '../assets/justLogoOutsideBuilding.webp'
import shopBikesImg from '../assets/fullInterior.webp'
import serviceRepairImg from '../assets/closeUpService.webp'
import bikeFittingImg from '../assets/bikeFitting.webp'
import tradeInImg from '../assets/weLoveAllBikes.webp'
import kidsTradeUpImg from '../assets/kidTradeUp.webp'
import eventsImg from '../assets/bikeGroupWithHandsInAir.webp'
import bodihow1Img from '../assets/HopsWithBodiWall.webp'
import bodihow2Img from '../assets/VibrantBeer.webp'
import bodihow3Img from '../assets/Carne Asada Bowl.webp'

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="hero-section">
        <Row className="align-items-center g-0">
          <Col xs={12} md={6}>
            <img
              src={heroImg}
              alt="Oregon Bicycle Company"
              className="hero-img"
            />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-start hero-content">
            <h1>Oregon Bicycle Company</h1>
            <p className="hero-text">
              Your local bike shop in Oregon, Wisconsin. We offer quality bikes,
              expert repairs, and everything you need to hit the road or trail.
            </p>
            <Button
              as={Link}
              to="/about/hours"
              variant="outline-primary"
              size="lg"
              className="visit-btn mt-3"
            >
              Visit Us
            </Button>
          </Col>
        </Row>
      </div>

      {/* About Us section */}
      <Container className="py-5 text-center">
        <h1>About Us</h1>
        <p className="about-home-text mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. We are a
          community-driven bike shop passionate about getting more people on two
          wheels.
        </p>
        <Button
          as={Link}
          to="/about"
          variant="outline-primary"
          size="lg"
          className="visit-btn mt-3"
        >
          Learn More
        </Button>
      </Container>

      {/* Shop Bikes banner */}
      <div className="shop-banner">
        <img
          src={shopBikesImg}
          alt="Shop Bikes"
          className="shop-banner-img"
        />
        <Button
          as={Link}
          to="/shop"
          variant="light"
          size="lg"
          className="shop-banner-btn"
        >
          Shop Bikes
        </Button>
      </div>

      {/* Services section */}
      <div className="services-section py-5">
        <h1 className="text-center mb-4">Services</h1>
        <Row className="g-2 mx-0">
          {[
            { title: 'Bike Service & Repair', desc: 'Expert repair and tune-ups', to: '/services/repair', img: serviceRepairImg },
            { title: 'Bike Fitting', desc: 'Custom fit for comfort', to: '/services/fitting', img: bikeFittingImg },
            { title: 'Bike Trade-In', desc: 'Trade up your old bike', to: '/services/trade-in', img: tradeInImg },
            { title: "Kids Bike Trade-Up", desc: 'They grow, bikes grow too', to: '/services/kids-trade-up', img: kidsTradeUpImg },
          ].map((svc, i) => (
            <Col key={i} xs={12} sm={6}>
              <Link to={svc.to} className="service-card">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="service-card-img"
                />
                <div className="service-card-overlay">
                  <h2 className="service-card-title">{svc.title}</h2>
                  <p className="service-card-desc">{svc.desc}</p>
                  <span className="service-card-btn">Read More</span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      {/* Events section */}
      <div className="events-section">
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="text-center events-content">
            <p className="events-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Join
              us for group rides, clinics, and community gatherings throughout
              the year.
            </p>
            <p className="events-cta">
              Check out other OBC events{' '}
              <Button
                as={Link}
                to="/events"
                variant="outline-primary"
                className="visit-btn ms-2"
              >
                Here
              </Button>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={eventsImg}
              alt="OBC Events"
              className="events-img"
            />
          </Col>
        </Row>
      </div>

      {/* Jackie section */}
      <div className="events-section">
        <Row className="align-items-center g-4">
          <Col xs={12} md={6}>
            <img
              src="https://placehold.co/600x400?text=Jackie+Image"
              alt="Jackie"
              className="events-img"
            />
          </Col>
          <Col xs={12} md={6} className="text-center events-content">
            <p className="events-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A
              placeholder section for more information about what we do.
            </p>
            <Button
              as={Link}
              to="/jackie"
              variant="outline-primary"
              className="visit-btn"
            >
              Here
            </Button>
          </Col>
        </Row>
      </div>

      {/* Bodihow Brewing Company section */}
      <Container className="py-5">
        <h1 className="text-center mb-4">Bodihow Brewing Company</h1>
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="text-center">
            <p className="bodihow-text mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Stop
              by Bodihow Brewing Company for craft brews and great company right
              next door to the bike shop.
            </p>
            <Button
              href="https://bodihow.com/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-primary"
              size="lg"
              className="visit-btn mt-3"
            >
              Come Visit
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Carousel className="bodihow-carousel">
              <Carousel.Item>
                <img
                  src={bodihow1Img}
                  alt="Bodihow Brewing 1"
                  className="d-block w-100 bodihow-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={bodihow2Img}
                  alt="Bodihow Brewing 2"
                  className="d-block w-100 bodihow-carousel-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={bodihow3Img}
                  alt="Bodihow Brewing 3"
                  className="d-block w-100 bodihow-carousel-img"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}
