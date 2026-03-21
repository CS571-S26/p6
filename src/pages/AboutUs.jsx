import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'

const staff = [
  {
    name: 'Staff Member 1',
    description: 'Short description about this team member and their role.',
    image: 'https://placehold.co/300x300?text=Photo',
  },
  {
    name: 'Staff Member 2',
    description: 'Short description about this team member and their role.',
    image: 'https://placehold.co/300x300?text=Photo',
  },
  {
    name: 'Staff Member 3',
    description: 'Short description about this team member and their role.',
    image: 'https://placehold.co/300x300?text=Photo',
  },
  {
    name: 'Staff Member 4',
    description: 'Short description about this team member and their role.',
    image: 'https://placehold.co/300x300?text=Photo',
  },
]

export default function AboutUs() {
  return (
    <>
      {/* Hero banner image */}
      <div className="about-hero">
        <img
          src="https://placehold.co/1200x400?text=About+Us+Banner"
          alt="About Us banner"
          className="about-hero-img"
        />
      </div>

      <Container className="py-5">
        {/* About Us section */}
        <section className="about-section text-center mb-5">
          <h1>About Us</h1>
          <p className="about-description mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. We are Oregon&apos;s trusted local
            bike shop, dedicated to serving cyclists of all levels with quality
            bikes, expert service, and a passion for the ride.
          </p>
        </section>

        {/* Our Staff section */}
        <section className="staff-section text-center">
          <h1>Our Staff</h1>
          <p className="staff-subtitle mb-4">
            Meet our friendly staff, interested in joining?{' '}
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
              <Col key={i} xs={12} sm={6} md={4} lg={3}>
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
  )
}
