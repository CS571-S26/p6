import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ColoredHeading from "../components/ColoredHeading";
import "../styles/AboutUs.css";
import "../styles/BikeServiceRepair.css";
import heroImg from "../assets/picOfMerch.webp";
import staffImg1 from "../assets/macAndKrysten.webp";
import staffImg2 from "../assets/Oliver.webp";
import staffImg3 from "../assets/Miranda&Jamie.webp";

const staff = [
  {
    name: "Mac & Krysten",
    description: "Short description about this team member and their role.",
    image: staffImg1,
  },
  {
    name: "Oliver",
    description: "Short description about this team member and their role.",
    image: staffImg2,
  },
  {
    name: "Miranda & Jamie",
    description: "Short description about this team member and their role.",
    image: staffImg3,
  },
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
            Oregon Bike Company was built around a simple idea: a great local
            bike shop should do more than sell bikes. It should be a place that
            brings people together, supports the community, and helps more
            people enjoy life on two wheels. We’re proud to call Oregon,
            Wisconsin home, and we love being part of a community where biking
            can mean so many different things. For some, it’s a weekend ride
            with friends or family. For others, it’s a way to stay active,
            explore new places, or simply enjoy a little more time outside. No
            matter what riding looks like for you, we believe a bike shop should
            feel welcoming, helpful, and rooted in the people it serves. That’s
            what we aim to be at Oregon Bike Company — a local shop that values
            connection, community, and good service just as much as the bikes
            themselves.
          </p>
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
