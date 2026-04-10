import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ColoredHeading from '../components/ColoredHeading'
import '../styles/Events.css'

function parseCSV(raw) {
  const [headerLine, ...lines] = raw.trim().split('\n')
  const headers = headerLine.split(',')
  return lines.map(line => {
    const values = []
    let current = ''
    let inQuotes = false
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(current)
        current = ''
      } else {
        current += char
      }
    }
    values.push(current)
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']))
  })
}

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'events.csv')
      .then(res => {
        if (!res.ok) throw new Error(`Could not load events.csv (${res.status})`)
        return res.text()
      })
      .then(text => setEvents(parseCSV(text)))
      .catch(err => console.error('Events load error:', err))
  }, [])

  return (
    <Container className="py-5">
      <ColoredHeading text="All Events" className="text-center mb-4" />
      <p className="events-intro mx-auto mb-3">
        At Oregon Bicycle Company, we want to be more than just a bike shop, we want to be a place that brings the community together. Throughout the year, we host a variety of events designed to welcome riders in, build confidence, share knowledge, and celebrate life on two wheels.
      </p>
      <p className="events-intro mx-auto mb-3">
        Along with our regular group rides and runs, that can include youth workshops, bike safety and skills sessions, maintenance clinics, community rides, and other shop events that help people learn, connect, and enjoy riding together.
      </p>
      <p className="events-intro mx-auto mb-4">
        You&apos;ll find all of our upcoming events on this page, and we update it frequently so you can always see what&apos;s coming up at the shop and in the community.
      </p>
      <div className="text-center mb-5">
        <Button
          as={Link}
          to="/events/group-rides"
          variant="outline-primary"
          className="visit-btn"
        >
          Group Rides
        </Button>
      </div>
      {events.length === 0 ? (
        <p className="text-center text-muted mb-5" style={{ fontSize: 'var(--fs-md)' }}>
          No events scheduled, but we will update them regularly!
        </p>
      ) : (
        events.map((event, i) => {
          const flipped = i % 2 !== 0
          const imageCol = (
            <Col xs={12} md={5} className="p-0">
              <img
                src={event.image}
                alt={event.title}
                className="events-card-img"
              />
            </Col>
          )
          const infoCol = (
            <Col xs={12} md={7} className="events-card-body">
              <h2 className="events-card-title">{event.title}</h2>
              <p className="events-card-meta">{event.date} &bull; {event.time}</p>
              <p className="events-card-blurb">{event.blurb}</p>
            </Col>
          )
          return (
            <Row
              key={i}
              className={`mb-4 overflow-hidden align-items-stretch events-card${i % 2 !== 0 ? ' events-card-alt' : ''}`}
            >
              {flipped ? <>{infoCol}{imageCol}</> : <>{imageCol}{infoCol}</>}
            </Row>
          )
        })
      )}

    </Container>
  )
}
