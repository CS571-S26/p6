import { Container, Row, Col } from 'react-bootstrap'
import '../styles/JackiesPage.css'

const collageImages = [
  { src: 'https://placehold.co/400x400?text=Jackie+1', alt: 'Jackie photo 1', span: 'tall' },
  { src: 'https://placehold.co/400x300?text=Jackie+2', alt: 'Jackie photo 2', span: '' },
  { src: 'https://placehold.co/400x300?text=Jackie+3', alt: 'Jackie photo 3', span: '' },
  { src: 'https://placehold.co/400x400?text=Jackie+4', alt: 'Jackie photo 4', span: '' },
  { src: 'https://placehold.co/400x400?text=Jackie+5', alt: 'Jackie photo 5', span: 'tall' },
  { src: 'https://placehold.co/400x300?text=Jackie+6', alt: 'Jackie photo 6', span: '' },
]

export default function JackiesPage() {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center">Jackie&apos;s Page</h1>

        {/* Photo collage */}
        <div className="collage-grid my-4">
          {collageImages.map((img, i) => (
            <div key={i} className={`collage-item ${img.span}`}>
              <img src={img.src} alt={img.alt} className="collage-img" />
            </div>
          ))}
        </div>

        {/* About Jackie */}
        <Row className="justify-content-center my-5">
          <Col xs={12} md={8} className="text-center">
            <h2>About Jackie</h2>
            <p className="jackie-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Jackie is a passionate cyclist and
              an integral part of the Oregon Bicycle Company family.
            </p>
          </Col>
        </Row>

        {/* Socials */}
        <div className="text-center my-4">
          <p className="socials-text">Go follow Jackie on her socials!</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
            aria-label="Jackie's Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </Container>
    </>
  )
}
