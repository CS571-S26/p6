import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/justLogoOutsideBuilding.webp";
import serviceRepairImg from "../assets/closeUpService.webp";
import bikeFittingImg from "../assets/bikeFitting.webp";
import tradeInImg from "../assets/weLoveAllBikes.webp";
import kidsTradeUpImg from "../assets/kidTradeUp.webp";
import eventsImg from "../assets/bikeGroupWithHandsInAir.webp";
import bodihow1Img from "../assets/HopsWithBodiWall.webp";
import bodihow2Img from "../assets/VibrantBeer.webp";
import bodihow3Img from "../assets/Carne Asada Bowl.webp";
import jackieImg from "../assets/jackieTalking.webp";
import ColoredHeading from "../components/ColoredHeading";
import HoursLocationWidget from "../components/HoursLocationWidget";
import ContactUsForm from "../components/ContactUsForm";
import mountainImg from "../assets/mountainBike.jpg";
import electricImg from "../assets/electricBike.jpg";
import kidsImg from "../assets/kidsBike.jpg";
import hybridImg from "../assets/hybridBike.jpg";
import roadImg from "../assets/roadBike.jpg";
import gravelImg from "../assets/gravelBike.jpg";
import accessoriesImg from "../assets/cyclingAccessories.jpg";
import clothingImg from "../assets/clothing.jpg";
import helmetImg from "../assets/helmet.jpg";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="hero-section">
        <img src={heroImg} alt="Oregon Bicycle Company" className="hero-img" />
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-text">
              Proudly serving Oregon, Wisconsin, we&apos;re your local bike shop for
              every rider, from first-time cyclists to lifelong enthusiasts.
              We&apos;re here to support all ages, abilities, and adventures in our
              community.
            </p>
            <Button
              as={Link}
              to="/about/hours"
              size="lg"
              className="hero-btn mt-3"
            >
              Visit Us
            </Button>
          </div>
        </div>
      </div>

      {/* About Us section */}
      <Container className="py-5 text-center">
        <ColoredHeading text="About Us" className="home-heading" />
        <p className="about-home-text mx-auto">
          At Oregon Bike Company, we see bikes as a way to connect people, slow
          down, and enjoy the place we call home. We&apos;re proud to be part of the
          Oregon community and to create a welcoming shop centered around
          service, connection, and a love of riding.
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

      {/* Shop by Category */}
      <div className="shop-category-section">
        <ColoredHeading text="Shop by Category" className="text-center mb-4 home-heading" />
        <div className="shop-category-scroll">
          {[
            { label: "Mountain Bikes", category: "mountain", img: mountainImg },
            { label: "Electric Bikes", category: "electric", img: electricImg },
            { label: "Kids Bikes", category: "kids", img: kidsImg },
            { label: "Hybrid Bikes", category: "hybrid", img: hybridImg },
            { label: "Road Bikes", category: "road", img: roadImg },
            { label: "Gravel Bikes", category: "gravel", img: gravelImg },
            { label: "Cycling Accessories", category: "apparel-accessories", img: accessoriesImg },
            { label: "Clothing", category: "clothing", img: clothingImg },
            { label: "Helmets", category: "helmets", img: helmetImg },
          ].map((item) => (
            <Link
              key={item.category}
              to={`/shop?category=${item.category}`}
              className="shop-category-card"
            >
              <img src={item.img} alt={item.label} className="shop-category-img" />
              <span className="shop-category-label">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button as={Link} to="/shop" variant="outline-primary" className="visit-btn">
            View All
          </Button>
        </div>
      </div>

      {/* Services section */}
      <div className="services-section py-3 mt-5">
        <ColoredHeading text="Services" className="text-center mb-4 home-heading" />
        <Row className="g-2 mx-0">
          {[
            {
              title: "Bike Service & Repair",
              desc: "Repair, Servicing, and Maintenance",
              to: "/services/repair",
              img: serviceRepairImg,
              imgPos: "center 65%",
            },
            {
              title: "Bike Fitting",
              desc: "Your optimal cycling experience",
              to: "/services/fitting",
              img: bikeFittingImg,
              imgPos: "center 75%",
            },
            {
              title: "Bike Trade-In",
              desc: "Trade up your old bike",
              to: "/services/trade-in",
              img: tradeInImg,
            },
            {
              title: "Kids Bike Trade-Up",
              desc: "They grow, bikes grow too",
              to: "/services/kids-trade-up",
              img: kidsTradeUpImg,
            },
          ].map((svc, i) => (
            <Col key={i} xs={12} sm={6}>
              <Link to={svc.to} className="service-card">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="service-card-img"
                  style={
                    svc.imgPos ? { objectPosition: svc.imgPos } : undefined
                  }
                />
                <div className="service-card-overlay">
                  <h2 className="service-card-title">{svc.title}</h2>
                  <p className="service-card-desc">{svc.desc}</p>
                  <span className="service-card-btn">Learn More</span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      {/* More than a Bike Shop */}
      <section className="community-section">
        <div className="community-header text-center">
          <ColoredHeading text="More than a Bike Shop" className="home-heading" />
          <p className="community-subheading">
            We&apos;re proud to be part of the Oregon community, creating spaces to ride, gather, and connect.
          </p>
        </div>

        <Container>
          {/* Events row */}
          <div className="community-row">
            <div className="community-text">
              <span className="community-eyebrow">Events</span>
              <h2 className="community-title">Rides, Runs, and Community Events</h2>
              <p className="community-desc">
                Join us for weekly group runs and rides every Wednesday night,
                along with other community events that are updated regularly on
                our site. Whether you&apos;re coming out to ride, run, or just stay
                connected, there&apos;s always something going on at Oregon Bike Company.
              </p>
              <Button
                as={Link}
                to="/events"
                variant="outline-primary"
                className="community-btn"
              >
                View Events
              </Button>
            </div>
            <div className="community-image-wrap">
              <img src={eventsImg} alt="OBC Events" className="community-img" />
            </div>
          </div>

          {/* Community row (flipped) */}
          <div className="community-row community-row--flipped">
            <div className="community-text">
              <span className="community-eyebrow">Community</span>
              <h2 className="community-title">Partnering with Jackie Hering</h2>
              <p className="community-desc">
                Oregon Bike Company is excited to partner with Jackie Hering, a
                professional triathlete from the Madison area and one of the top
                long-course athletes in the sport. Jackie has raced professionally
                since 2011, has multiple IRONMAN and IRONMAN 70.3 wins, and finished
                2nd in the 2024 IRONMAN Pro Series. We&apos;re proud that she trusts
                Oregon Bike Company with her bike support and repair needs.
              </p>
              <Button
                as={Link}
                to="/jackie"
                variant="outline-primary"
                className="community-btn"
              >
                Learn More
              </Button>
            </div>
            <div className="community-image-wrap">
              <img src={jackieImg} alt="Jackie Hering" className="community-img" style={{ objectPosition: "center top" }} />
            </div>
          </div>
        </Container>
      </section>

      {/* Hours & Location */}
      <Container className="py-5">
        <ColoredHeading text="Hours & Location" className="text-center mb-4 home-heading" />
        <HoursLocationWidget />
      </Container>

      {/* Bodihow Brewing Company section */}
      <Container className="py-5">
        <ColoredHeading
          text="Bodihow Brewing Company"
          className="text-center mb-4 home-heading"
        />
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="text-center">
            <p className="bodihow-text mx-auto">
              &ldquo;The Bodi&rdquo; is home to Bodihow (Boh-dee-how) Brewing Company and
              Oregon Bicycle Company. Bodihow brewpub brings craft beer and
              authentically inspired Mesoamerican cuisine, featuring tacos,
              handmade corn tortillas, fresh salsas, and more. Bodihow is also
              the home of Oregon&apos;s first drive-thru coffee shop, with
              proprietary blends from True Coffee Roasters.
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

      {/* Contact Us */}
      <ContactUsForm />
    </>
  );
}
