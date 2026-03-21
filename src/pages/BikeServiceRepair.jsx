import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import '../styles/BikeServiceRepair.css'

import heroImg from '../assets/zoomedOutService.webp'

const tuneUps = [
  {
    name: 'Standard Tune-Up',
    price: '$100',
    description:
      'Do you ride an urban cruiser, a basic hard-tail mountain bike, or an entry-level road bike? The standard tune-up will cover everything your bike needs.',
    detail:
      'We start by evaluating your bike for service. We check wear and tear on your bearings, chain, cassette, wheels, tires, brakes, shifters, and cables. We\'ll notify you if the bike needs any new parts due to damage or routine wear. All replacement parts are an additional charge and will require additional labor not included in the service package price.',
    features: [
      'Complete Frame, Drivetrain, Chain, and Brake Cleaning',
      'Bearing Adjustments and Assessment for Wear',
      'Tighten and Torque Hubs, Cranks, Pedals, Headset and Bolts to Specification',
      'Shift & Braking Adjustments',
      'Wheel True Check Performed On Bike',
      'Lubricate Chain',
      'Safety Check',
    ],
    note: 'If you have an e-bike, tri bike, full-suspension bike, or a bike with electronic shifting, your bicycle is ineligible for a Standard Tune-Up.',
  },
  {
    name: 'eBike Tune-Up',
    price: '$150',
    description:
      'A service package designed to meet your electric bike\'s specific needs. Pete\'s is only certified to work on bikes with Bosch, Shimano, or Bafang electric motors and their corresponding batteries. We are committed to servicing all major brands we carry in our shop. Not sure if your bike is eligible? Contact us to inquire.',
    detail:
      'Like our standard tune-up, we start by evaluating your bike for service. We check wear and tear on your bearings, chain, cassette, wheels, tires, brakes, shifters, and cables. We\'ll notify you if the bike needs any new parts due to damage or everyday wear. All replacement parts are an additional charge and subject to additional labor fees.',
    features: [
      'Complete Frame, Drivetrain, Chain, and Brake Cleaning',
      'Bearing Adjustments and Assessment for Wear',
      'Tighten and Torque Hubs, Cranks, Pedals, Headset and Bolts to Specification',
      'Shift & Braking Adjustments',
      'Wheel True Check Performed On Bike',
      'Lubricate Chain with eBike Specific Lubricant',
      'Perform Any Firmware or Software Updates',
      'Check Battery Life',
    ],
  },
  {
    name: 'Full Suspension Bike Tune-Up',
    price: '$150',
    description:
      'We like to ride our full suspension bikes hard and in all conditions, and we know you do, too. These bikes need a little extra TLC and thorough cleaning to keep them moving like they should — and eliminate those squeaks and rattles.',
    detail:
      'As always, we start by evaluating your bike for service. We check wear and tear on your suspension, bearings, chain, cassette, wheels, tires, brakes, shifters, and cables. We\'ll notify you if the bike needs any new parts or additional service due to damage or normal wear. All replacement parts are an additional charge and subject to additional labor fees.',
    features: [
      'Complete Frame, Drivetrain and Brake Cleaning',
      'Chain Strip and Prep for Lubricant',
      'Tighten and Torque Hubs, Cranks, Pedals, Headset and Bolts to Specification',
      'Linkages Cleaned and Tightened to Specification',
      'Bearing Adjustments and Assessment for Wear',
      'Shift & Braking Adjustments',
      'Wheel True Check',
      'Apply Chain Lubricant or Wax',
      'Firmware and Software Updates (When Applicable)',
      'Safety Check',
    ],
  },
  {
    name: 'Tri Bike Tune-Up',
    price: '$150',
    description:
      'You pour your blood, sweat, tears, and time into your training. We\'re here to make life a little easier by ensuring your bike performs at its best so you can focus on the next big race.',
    detail:
      'We start by evaluating your bike for service. We check for wear and tear on your bearings, chain, cassette, wheels, tires, brakes, shifters, and cables. We\'ll notify you if the bike needs any new parts or additional service due to damage or normal wear. All replacement parts are an additional charge and subject to additional labor fees.',
    features: [
      'Complete Frame, Drivetrain and Brake Cleaning',
      'Chain Strip and Prep for Lubricant',
      'Bearing Adjustments and Assessment for Wear',
      'Tighten and Torque Hubs, Cranks, Pedals, Headset and Bolts to Specification',
      'Shift & Braking Adjustments',
      'Wheel True Check',
      'Apply Chain Lubricant or Wax',
      'Firmware and Software Updates (When Applicable)',
      'Safety Check',
    ],
  },
  {
    name: 'Performance Bike Tune-Up',
    price: '$150',
    description:
      'Are you lucky enough to own a light-as-a-feather carbon road or gravel bike? How about a titanium hard-tail mountain bike? Did you ditch the cables and opt for electronic shifting? If so, a performance tune-up is for you.',
    detail:
      'We\'re ready to give your bike the care it deserves and help maintain your investment. Our initial evaluation will assess wear and tear on your suspension, bearings, chain, cassette, wheels, tires, brakes, shifters, and cables. We\'ll notify you if the bike needs any new parts or additional service due to damage. All replacement parts are an additional charge and subject to further labor fees.',
    features: [
      'Comprehensive Cleaning, with Drivetrain Removal',
      'Chain Strip and Prep for Lubricant',
      'Bearing Adjustments and Assessment for Wear',
      'Tighten and Torque Hubs, Cranks, Pedals, Headset and Bolts to Specification',
      'Shift & Braking Adjustments',
      'Full Wheel True Performed Off Bike',
      'Apply Chain Lubricant or Wax of Choice',
      'Firmware and Software Updates (When Applicable)',
      'Safety Check',
    ],
  },
  {
    name: 'Premium Tune-Up',
    price: '$250',
    description:
      'Our Premium Tune-Up is a recommended yearly service for all competition bikes of every discipline. This service package is a complete tear-down, deep cleaning, and rebuild to restore your bike to like-new condition.',
    detail:
      'We\'ll evaluate your bike\'s needs and help you select the best replacement parts to meet your goals. All replacement parts are an additional charge. We use Silca\'s top-of-the-line products to clean and degrease as we disassemble the bike, then painstakingly grease and reassemble from the ground up. Select from Silca\'s Ultimate Tubeless Sealant, Stan\'s No-Tubes, or Orange Seal. Choose from Ceramic Speed UFO Drip, Silca Synergetic Wet, Super Secret Chain Lube, or Silca Secret Chain Blend Hot Wax. We finish with Silca\'s Ultimate Graphene Spray Wax to protect your frame for 90 days. You won\'t recognize your bike once we\'re done.',
    features: [
      'Headset Disassembly and Cleaning',
      'Groupset Removal and Degreasing',
      'Bottom Bracket Removal and Cleaning',
      'Chain Strip and Prep for Lubricant',
      'Frame Cleaning, Waxing and Polishing with Silca Bicycle Spa',
      'Reassembly: Headset, Bottom Bracket, Groupset Installed',
      'New Cables and Housing Installed (When Applicable)',
      'Replace Batteries in Shifters (When Applicable)',
      'Handlebars Wrapped or New Grips Installed',
      'All Bolts Tightened to Torque Specification',
      'Linkages Regreased and Tightened to Specification (When Applicable)',
      'Brake Bleed',
      'Wheels Fully Trued and Tensioned',
      'Reset Tubeless with Sealant of Choice',
      'Apply Chain Lubricant or Wax',
      'Firmware and Software Updates (When Applicable)',
      'Safety Check',
    ],
  },
]

const alaCarte = [
  { service: 'Shift Adjustment, Single', price: '$15' },
  { service: 'Brake Adjustment, Single', price: '$15' },
  { service: 'Brake Bleed, Single', price: '$35' },
  { service: 'Tire / Tube Install, Single*', price: '$15' },
  { service: 'Tubeless Set-up, Single*', price: '$30' },
  { service: 'Handlebar Wrap*', price: '$15' },
  { service: '50-Hour Fork / Can Service*', price: '$70' },
  { service: '200-Hour Fork Service*', price: '$200' },
  { service: 'Bike Wash', price: '$40' },
  { service: 'Chain Wax', price: '$40' },
  { service: 'Boxed Bike Build', price: '$150' },
  { service: 'Boxed eBike Build', price: '$200' },
  { service: 'Pack for Shipping**', price: '$150' },
  { service: "Kid's/BMX Bike Tune-Up*", price: '$50' },
  { service: 'Shop Rate', price: '$100/hr' },
]

export default function BikeServiceRepair() {
  return (
    <div className="obs-service-page">
      {/* Hero Banner */}
      <div className="obs-service-hero">
        <img src={heroImg} alt="Bike workshop" className="obs-service-hero-img" />
        <div className="obs-service-hero-overlay">
          <h1 className="obs-service-hero-title">Bike Service &amp; Repair</h1>
          <p className="obs-service-hero-sub">Expert care for every type of rider and every type of bike.</p>
        </div>
      </div>

      {/* Page Content */}
      <Container fluid="xl" className="py-5">

        {/* Intro */}
        <p className="obs-intro-text mb-2">
          Whether it&apos;s a flat tire or a major overhaul, you can count on us to do the job right the first time. Our skilled service technicians are certified for repairs on all major bike brands, not just the ones we sell. Many small repairs can be completed while you wait. If your repairs will take more time, we&apos;ll give you an accurate estimate of when your bicycle will be ready as well as the cost, and call you when it&apos;s completed.
        </p>
        <p className="obs-intro-text mb-5">
          If you&apos;re bringing your bike out of storage, want to show it some love after a good season of riding, or just want to be sure everything is in proper order before your next big excursion, choose one of our tune-up packages for the best value!
        </p>

        <Row className="text-start gx-5 gy-5">

          {/* Tune-Up Packages */}
          <Col lg={8}>
            <h2 className="obs-section-title">Tune-Up Packages</h2>
            <hr className="obs-section-divider" />
            <Accordion flush>
              {tuneUps.map((pkg, idx) => (
                <Accordion.Item eventKey={String(idx)} key={pkg.name} className="obs-accordion-item">
                  <Accordion.Header>
                    <span className="obs-accordion-name">{pkg.name}</span>
                    <span className="obs-accordion-price">{pkg.price}</span>
                  </Accordion.Header>
                  <Accordion.Body className="obs-accordion-body">
                    <p className="mb-3">{pkg.description}</p>
                    <p className="mb-3">{pkg.detail}</p>
                    <p className="obs-includes-label mb-2">
                      Includes:
                    </p>
                    <ul className="obs-feature-list mb-4">
                      {pkg.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    {pkg.note && (
                      <p className="obs-note mb-4">{pkg.note}</p>
                    )}
                    <Button className="obs-btn-shop">Come Visit Us</Button>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            {/* Warranty Claims */}
            <div className="obs-warranty-box mt-5">
              <h2 className="obs-section-title">Warranty Claims</h2>
              <hr className="obs-section-divider" />
              <p className="obs-section-sub mb-0">
                We are here to help submit warranty claims for all bike brands we carry. The bike owner is financially responsible for replacement parts and labor if the case is not warrantable. The warranty process is subject to our hourly service rate for labor not covered by the manufacturer. This includes time spent evaluating damage, gathering claim materials, and corresponding with the manufacturer. The bicycle owner is responsible for any necessary shipping charges unless covered by the manufacturer under warranty. Proof of purchase is required for all warranty claims.
              </p>
            </div>
          </Col>

          {/* A La Carte Sidebar */}
          <Col lg={4}>
            <div className="obs-sidebar">
              <h2 className="obs-section-title">A La Carte Services</h2>
              <hr className="obs-section-divider" />
              <p className="obs-section-sub">Additional services are available. Prices are subject to change.</p>
              <table className="obs-alacarte-table mb-3">
                <tbody>
                  {alaCarte.map(({ service, price }) => (
                    <tr key={service}>
                      <td>{service}</td>
                      <td>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="obs-note mb-4">
                *Parts and materials not included.&nbsp;&nbsp;**Freight not included.
              </p>
              <Button className="obs-btn-shop w-100">Come Visit Us</Button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}
