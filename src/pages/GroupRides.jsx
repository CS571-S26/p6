import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import ColoredHeading from "../components/ColoredHeading";
import "../styles/GroupRides.css";
import groupRideImg from "../assets/runGroupPic.webp";
import groupRideImg2 from "../assets/group-ride-caraousel-2.webp";
import groupRideImg3 from "../assets/group-ride-caraousel-3.webp";
import groupRideImg4 from "../assets/group-ride-caraousel-4.webp";

const images = [
  { src: groupRideImg, alt: "Group run" },
  { src: groupRideImg4, alt: "Evening group ride wider" },

  { src: groupRideImg2, alt: "Group run with two rows of people", pos: "center 35%" },
  { src: groupRideImg3, alt: "Evening group ride" },
];

export default function GroupRides() {
  return (
    <>
      {/* Carousel hero */}
      <div className="group-rides-hero">
        <Carousel>
          {images.map((img, i) => (
            <Carousel.Item key={i}>
              <img
                src={img.src}
                alt={img.alt}
                className="group-rides-carousel-img"
                style={img.pos ? { objectPosition: img.pos } : undefined}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="py-5">
        {/* Intro */}
        <section className="text-center mb-5">
          <ColoredHeading text="Weekly Pub Run & Ride" />
          <p className="group-rides-intro mx-auto mb-4">
            Join us on Wednesday nights for a weekly run, ride, or both — and
            enjoy your first beverage on us.
          </p>
          <Button
            href="https://www.facebook.com/groups/782590590476543/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary"
            className="group-rides-btn"
          >
            Join Our Facebook Group
          </Button>
          <p className="group-rides-fb-note mt-3">
            For weather updates, route changes, and the latest event details.
          </p>
        </section>

        {/* Two cards */}
        <Row className="g-4">
          {/* Pub Run */}
          <Col xs={12} md={6}>
            <Card className="pub-card h-100">
              <div className="pub-card-header pub-card-header--run">
                <h2 className="pub-card-header-title">Pub Run</h2>
              </div>
              <Card.Body className="d-flex flex-column">
                <div className="pub-card-details">
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Day</span>
                    <span>Wednesdays</span>
                  </div>
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Arrive</span>
                    <span>5:15 PM</span>
                  </div>
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Starts</span>
                    <span>5:30 PM</span>
                  </div>
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Distance</span>
                    <span>~3 miles</span>
                  </div>
                </div>

                <p className="pub-card-desc">
                  Arrive by 5:15 PM to check in and grab a drink ticket. The run
                  begins at 5:30 PM.
                </p>

                <div className="pub-card-safety">
                  <strong>Please note:</strong> These are open roads with no
                  traffic control. All participants should follow the rules of
                  the road. Runners are responsible for knowing the route before
                  heading out.
                </div>

                <div className="pub-card-route mt-auto">
                  <h3 className="pub-card-route-title">Current Route</h3>
                  <p className="pub-card-route-date">Updated 3/11/26</p>
                  <p className="pub-card-route-desc">
                    Short Run — approx. 3 miles
                  </p>
                  <Button
                    href="https://connect.garmin.com/app/course/434736096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-card-btn"
                  >
                    View Run Route
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Pub Ride */}
          <Col xs={12} md={6}>
            <Card className="pub-card h-100">
              <div className="pub-card-header pub-card-header--ride">
                <h2 className="pub-card-header-title">Pub Ride</h2>
              </div>
              <Card.Body className="d-flex flex-column">
                <div className="pub-card-details">
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Day</span>
                    <span>Wednesdays</span>
                  </div>
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Wheels Up</span>
                    <span>5:30 PM</span>
                  </div>
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Short Route</span>
                    <span>~12 miles</span>
                  </div>
                  <div className="pub-card-detail-row">
                    <span className="pub-card-label">Long Route</span>
                    <span>~18 miles</span>
                  </div>
                </div>

                <p className="pub-card-desc">
                  Our weekly pub ride heads out Wednesday nights at 5:30 PM. We
                  typically offer both a short and long route option. Riders of
                  a wide range of abilities usually attend.
                </p>

                <div className="pub-card-safety">
                  <strong>Please note:</strong> These rides take place on{" "}
                  <strong>open roads with no traffic control</strong>. These are{" "}
                  <strong>not no-drop rides</strong> — connect with the group
                  before heading out if you'd like to ride together. Riders are
                  expected to know their route in advance.
                </div>

                <div className="pub-card-route mt-auto">
                  <h3 className="pub-card-route-title">Current Routes</h3>
                  <p className="pub-card-route-date">Updated 9/17/25</p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      href="https://connect.garmin.com/app/course/276422357"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-card-btn"
                    >
                      Short Ride (~12 mi)
                    </Button>
                    <Button
                      href="https://connect.garmin.com/app/course/276419665"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-card-btn"
                    >
                      Long Ride (~18 mi)
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
