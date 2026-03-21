import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
      <h1 className="mb-5">All Events</h1>
      {events.map((event, i) => {
        const flipped = i % 2 !== 0
        const imageCol = (
          <Col xs={12} md={4} className="p-0">
            <img
              src={event.image}
              alt={event.title}
              className="events-card-img"
            />
          </Col>
        )
        const infoCol = (
          <Col xs={12} md={8} className="events-card-body">
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
      })}
    </Container>
  )
}
