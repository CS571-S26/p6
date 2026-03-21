import { Row, Col } from 'react-bootstrap'
import '../styles/HoursLocation.css'

const hours = [
  { day: 'Monday', time: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.5!2d-89.3846!3d42.9261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806490b1f1a82ed%3A0x5e3a5f3c5d5e4b0a!2s201+Concord+Dr%2C+Oregon%2C+WI+53575!5e0!3m2!1sen!2sus!4v1700000000000'

export { hours, mapSrc }

export default function HoursLocationWidget() {
  return (
    <Row className="g-4">
      <Col xs={12} md={6}>
        <div className="hl-box">
          <h1>Hours</h1>
          <ul className="hours-list">
            {hours.map((h) => (
              <li key={h.day} className="hours-row">
                <span className="hours-day">{h.day}</span>
                <span className="hours-time">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="hl-box">
          <h1>Location</h1>
          <div className="map-wrapper">
            <iframe
              title="Oregon Bicycle Company location"
              src={mapSrc}
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Col>
    </Row>
  )
}
