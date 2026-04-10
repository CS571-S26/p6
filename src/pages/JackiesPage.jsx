import { Container, Row, Col, Button } from "react-bootstrap";
import ColoredHeading from "../components/ColoredHeading";
import heroImg from "../assets/jackieWithBikeVertical.webp";
import aboutImg from "../assets/jackieRiding.webp";
import finishLineImg from "../assets/jackieCrossingFinishLine.webp";
import firstPlaceImg from "../assets/jackieGettingFirst.webp";
import ridingImg from "../assets/jackieRiding.webp";
import runningImg from "../assets/jackieRunning.webp";
import "../styles/JackiesPage.css";

const stats = [
  { text: "Madison-area pro triathlete", img: runningImg, alt: "Jackie running" },
  { text: "Professional since 2011", img: ridingImg, alt: "Jackie riding" },
  { text: "2nd in the 2024 IRONMAN Pro Series", img: finishLineImg, alt: "Jackie crossing finish line" },
  { text: "Multiple IRONMAN and IRONMAN 70.3 wins", img: firstPlaceImg, alt: "Jackie winning first place" },
];

const links = [
  {
    label: "IRONMAN Athlete Profile",
    href: "https://www.ironman.com/proseries/triathletes/jackie-hering",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jackiemhering",
  },
];

export default function JackiesPage() {
  return (
    <>
      {/* Hero section */}
      <section className="jackie-hero">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} md={6} className="jackie-hero-img-col">
              <img
                src={heroImg}
                alt="Jackie Hering with her bike in front of Oregon Bicycle Company"
                className="jackie-hero-img"
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="jackie-hero-text">
                <ColoredHeading
                  text="Oregon Bicycle Company x Jackie Hering"
                  className="jackie-hero-heading"
                />
                <p className="jackie-hero-desc">
                  Oregon Bicycle Company is proud to partner with Madison-area
                  professional triathlete Jackie Hering. With a pro career
                  spanning more than a decade, multiple IRONMAN and IRONMAN 70.3
                  wins, and a runner-up finish in the 2024 IRONMAN Pro Series,
                  Jackie is one of the sport&apos;s top long-course athletes,
                  and we&apos;re honored that she trusts Oregon Bicycle Company with
                  her bike service and support.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick stats */}
      <section className="jackie-stats-section">
        <Container>
          <Row className="g-3 justify-content-center">
            {stats.map((stat, i) => (
              <Col key={i} xs={6} md={3}>
                <div className="jackie-stat-card">
                  <img src={stat.img} alt={stat.alt} className="jackie-stat-img" />
                  <p className="jackie-stat-text">{stat.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About / Partnership section */}
      <section className="jackie-about-section">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} md={6}>
              <div className="jackie-about-text">
                <ColoredHeading
                  text="About Jackie"
                  className="jackie-about-heading"
                />
                <p className="jackie-about-desc">
                  Jackie Hering is a professional triathlete based in the Madison
                  area who has built an impressive career in long-course racing.
                  Racing professionally since 2011, she has earned a reputation
                  for consistency, toughness, and high-level performances across
                  IRONMAN and IRONMAN 70.3 competition. Along with multiple wins
                  at the highest level, Jackie finished second overall in the
                  2024 IRONMAN Pro Series and continues to compete among the best
                  in the sport.
                </p>
                <p className="jackie-about-desc">
                  As a local athlete, Jackie represents the kind of dedication,
                  professionalism, and passion for endurance sport that fits
                  naturally with what we value at Oregon Bicycle Company. We&apos;re
                  proud to support her season and excited that she trusts our
                  team with her bike service and repair needs.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={aboutImg}
                alt="Jackie Hering racing on her bike"
                className="jackie-about-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Follow Jackie links */}
      <section className="jackie-links-section">
        <Container className="text-center">
          <ColoredHeading
            text="Follow Jackie"
            className="jackie-links-heading"
          />
          <p className="jackie-links-intro">
            To keep up with Jackie&apos;s racing, results, and latest updates,
            visit her pages below.
          </p>
          <div className="jackie-links-row">
            {links.map((link, i) => (
              <Button
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-primary"
                className="jackie-link-btn"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
