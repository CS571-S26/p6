import { Container, Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import groupRideImg from '../assets/bikeGroupWithHandsInAir.webp'

const images = [
  { src: groupRideImg, alt: 'Riders on a forest road' },
  { src: groupRideImg, alt: 'Morning group ride on gravel' },
  { src: groupRideImg, alt: 'Evening ride through the hills' },
  { src: groupRideImg, alt: 'Pack riding on a country road' },
]

export default function GroupRides() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Group Rides</h1>

      <Carousel className="mb-4">
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="d-block w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <p className="mb-4" style={{ maxWidth: '680px' }}>
        Every week we head out as a group — no one gets dropped, no one rides alone.
        Whether you're new to cycling or a seasoned road warrior, our group rides are a
        great way to explore the roads and trails around Oregon, meet fellow riders, and
        keep each other accountable. All paces, all bikes, all welcome.
      </p>

      <Button as={Link} to="/events" variant="outline-secondary">
        View All Events
      </Button>
    </Container>
  )
}
