import { Container, Button } from 'react-bootstrap'
import '../styles/ShopBikes.css'
import shopImg from '../assets/fullInterior.webp'

export default function ShopBikes() {
  return (
    <>
      <Container className="py-5 text-center">
        <h1>Shop Bikes</h1>
        <p className="shop-bikes-subtitle">
          Browse our full selection of bikes available in store.
        </p>
        <Button
          href="https://oregonbicyclecompany.locally.com/search?store=321934"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline-primary"
          size="lg"
          className="shop-bikes-btn mt-3"
        >
          View Live Inventory
        </Button>
      </Container>

      <div className="shop-bikes-banner">
        <img
          src={shopImg}
          alt="Inside Oregon Bicycle Company"
          className="shop-bikes-banner-img"
        />
      </div>
    </>
  )
}
