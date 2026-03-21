import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/ShopBikes.css'

export default function ShopBikes() {
  useEffect(() => {
    const config = {
      store: '321934',
      uri: 'search',
    }

    const query = Object.keys(config)
      .map(
        (k) => encodeURIComponent(k) + '=' + encodeURIComponent(config[k])
      )
      .join('&')

    const endpoint =
      'https://oregonbicyclecompany.locally.com/widgets/search.js?' + query

    // Remove any previous script to avoid duplicates
    const existing = document.getElementById('lcly-script-0')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.id = 'lcly-script-0'
    script.src = endpoint
    script.async = true
    document.getElementById('lcly-button-0').appendChild(script)

    return () => {
      const el = document.getElementById('lcly-script-0')
      if (el) el.remove()
    }
  }, [])

  return (
    <>
      <Container className="py-5 text-center">
        <h1>Shop Bikes</h1>
        <p className="shop-bikes-subtitle">
          Browse our full selection of bikes available in store.
        </p>
      </Container>

      <div className="shop-bikes-widget-wrapper">
        <div
          id="lcly-button-0"
          data-switchlive="true"
          data-switchlive-impression="true"
          data-switchlive-impression-id-pl="1"
        >
          <a
            id="lcly-link-0"
            data-switchlive="true"
            data-switchlive-mode="auto"
            data-switchlive-id-pl="6"
            role="button"
            href="https://www.locally.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Locally
          </a>
        </div>
      </div>
    </>
  )
}
