import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ColoredHeading from "../components/ColoredHeading";
import "../styles/AboutUs.css";
import "../styles/BikeServiceRepair.css";
import heroImg from "../assets/picOfMerch.webp";
import staffImg1 from "../assets/macAndKrysten.webp";
// import staffImg2 from "../assets/Oliver.webp";
import staffImg3 from "../assets/Miranda&Jamie.webp";
import bikeQualityImg from "../assets/bike-quality.webp";
import friendlyStaffImg from "../assets/friendly-staff.webp";
import bikePickupImg from "../assets/bike-pickup.webp";

const staff = [
  {
    name: "Mac & Krysten",
    description: "Krysten and Mac are proud co-owners of Oregon Bicycle Company and have lived in the Oregon community for over 20 years. Krysten has been enjoying cycling for 12 years and Mac has been cycling for 34 years. Their kids have also been involved in this wonderful activity for over a decade, so we can relate to cyclists' needs at various levels. We are excited to continue to grow the shop community and provide the friendly service, education, and support a local shop can provide.",
    image: staffImg1,
  },
  // {
  //   name: "Oliver",
  //   description: "Short description about this team member and their role.",
  //   image: staffImg2,
  // },
  {
    name: "Miranda & Jamie",
    description: "Miranda and Jamie Bush, proud co-owners of our local community bike shop, raised our three kids in Oregon. As triathletes who've tackled multiple Ironmans and are gearing up to race IM Wisconsin with our son this year, we're passionate about helping everyone stay active and connected. Whether you're training for your next adventure or just need reliable wheels to get around, we're thrilled to offer a true local option for bikes, service, and friendly connection.",
    image: staffImg3,
  },
  // {
  //   name: "Maggie & Seth",
  //   description: "Short description about this team member and their role.",
  //   image: "https://placehold.co/600x600?text=Maggie+%26+Seth",
  // },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero banner image */}
      <div className="obs-service-hero">
        <img
          src={heroImg}
          alt="Oregon Bicycle Company merchandise"
          className="obs-service-hero-img"
        />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">About Us</h1>
          <p className="obs-service-hero-sub">Oregon&apos;s local bike shop.</p>
        </div>
      </div>

      <Container className="py-5">
        {/* About Us section */}
        <section className="about-section text-center mb-5">
          <ColoredHeading text="About Us" />
          <p className="about-description mx-auto">
            Oregon Bicycle Company was built around a simple idea: a great local
            bike shop should do more than sell bikes. It should be a place that
            brings people together, supports the community, and helps more
            people enjoy life on two wheels. We’re proud to call Oregon,
            Wisconsin home, and we love being part of a community where biking
            can mean so many different things. For some, it’s a weekend ride
            with friends or family. For others, it’s a way to stay active,
            explore new places, or simply enjoy a little more time outside. No
            matter what riding looks like for you, we believe a bike shop should
            feel welcoming, helpful, and rooted in the people it serves. That’s
            what we aim to be at Oregon Bicycle Company, a local shop that values
            connection, community, and good service just as much as the bikes
            themselves.
          </p>
        </section>

        {/* Why Oregon Bicycle Company */}
        <section className="why-section mb-5">
          <ColoredHeading text="Why Oregon Bicycle Company?" />
          <p className="why-supporting">
            We are excited to be Oregon's local bike shop. We're proud to provide
            quality bikes, trusted service, and a welcoming community for riders
            of all ages and abilities.
          </p>

          <Row className="g-4 mt-3">
            <Col xs={12} sm={6} md={4}>
              <Card className="why-card h-100 border-0">
                <Card.Img
                  variant="top"
                  src={bikeQualityImg}
                  alt="Local, Quality Bikes"
                  className="why-card-img"
                />
                <Card.Body>
                  <Card.Title className="why-card-title">
                    Local, Quality Bikes
                  </Card.Title>
                  <Card.Text className="why-card-text">
                    We carry a thoughtful selection of bikes, gear, and
                    accessories chosen for the riders in our community. Our focus
                    is on quality, value, and helping you find the right fit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="why-card h-100 border-0">
                <Card.Img
                  variant="top"
                  src={friendlyStaffImg}
                  alt="Friendly, Helpful Service"
                  className="why-card-img"
                />
                <Card.Body>
                  <Card.Title className="why-card-title">
                    Friendly, Helpful Service
                  </Card.Title>
                  <Card.Text className="why-card-text">
                    Whether you need repairs, maintenance, or advice, our team is
                    here to help. We want every rider to feel comfortable,
                    supported, and confident when they walk through our doors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="why-card h-100 border-0">
                <Card.Img
                  variant="top"
                  src={bikePickupImg}
                  alt="Built Around Community"
                  className="why-card-img"
                />
                <Card.Body>
                  <Card.Title className="why-card-title">
                    A Hub for Gathering
                  </Card.Title>
                  <Card.Text className="why-card-text">
                    Oregon Bicycle Company is more than a shop. We&apos;re a place for
                    local riders to connect through events, group rides, shared
                    knowledge, and a love of being on two wheels.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Our Staff section */}
        <section className="staff-section text-center">
          <ColoredHeading text="Our Staff" />
          <p className="staff-subtitle mb-4">
            Meet our friendly staff, interested in joining?{" "}
            <Button
              as={Link}
              to="/about/work-with-us"
              variant="outline-primary"
              className="hiring-btn ms-2"
            >
              We&apos;re hiring
            </Button>
          </p>

          <Row className="g-4 justify-content-center">
            {staff.map((member, i) => (
              <Col key={i} xs={12} sm={6} md={4}>
                <Card className="staff-card h-100 border-0">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    className="staff-card-img"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="staff-name">
                      {member.name}
                    </Card.Title>
                    <Card.Text className="staff-desc">
                      {member.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
}
