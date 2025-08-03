import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AboutTeaserSection() {
  return (
    <section className="about-teaser-section bg-light">
      <Container fluid className="px-0">
        <Row className="g-0 align-items-stretch">
          {/* Video: Øverst på mobil, høyre på desktop */}
          <Col
            xs={12}
            md={6}
            className="video-col order-1 order-md-2"
          >
            <div className="video-wrapper d-flex">
              <video
                src="/assets/acaihouse-movie.mov"
                autoPlay
                muted
                loop
                playsInline
                className="about-video"
              />
            </div>
          </Col>

          {/* Tekst: Nederst på mobil, venstre på desktop */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start px-4 px-md-5 py-5 order-2 order-md-1"
            style={{ zIndex: 2 }}
          >
            <h2 className="fw-bold display-4 mb-3 text-light-purple">
              Laget for hånd. Inspirert av naturen.
            </h2>
            <p className="text-muted fs-5 mb-4">
              Oppdag historien bak våre produkter, våre råvarer og hvordan vi bringer smaken av Brasil til Norge.
            </p>
            <Link to="/kontakt">
              <Button variant="dark" className="btn-lg bg-light-purple border-0">
                Les mer →
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
