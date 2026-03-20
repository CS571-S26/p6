import { Container, Row, Col } from 'react-bootstrap'
import rawCSV from '../data/events.csv?raw'

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

const events = parseCSV(rawCSV)

const bgColors = ['#ede8df', '#e6ede3']

export default function Events() {
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
              className="w-100 h-100"
              style={{ objectFit: 'cover', display: 'block', minHeight: '220px' }}
            />
          </Col>
        )
        const infoCol = (
          <Col xs={12} md={8} className="p-4 d-flex flex-column justify-content-center">
            <h2>{event.title}</h2>
            <p className="text-muted mb-2">{event.date} &bull; {event.time}</p>
            <p className="mb-0">{event.blurb}</p>
          </Col>
        )
        return (
          <Row
            key={i}
            className="mb-4 overflow-hidden align-items-stretch"
            style={{ borderRadius: '4px', background: bgColors[i % 2], border: '1px solid #d4cfc8' }}
          >
            {flipped ? <>{infoCol}{imageCol}</> : <>{imageCol}{infoCol}</>}
          </Row>
        )
      })}
    </Container>
  )
}
