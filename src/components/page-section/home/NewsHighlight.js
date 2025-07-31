import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NewsHighlight() {
  return (
    <>
      {/* Øvre bølgeovergang – dryppende açaí-stil */}
      <div className="wave-top bg-light p-0 m-0">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '150px',
            transform: 'rotate(180deg)',
          }}
        >
          <path
            d="M0,0 
              C96,30 192,60 288,40 
              C384,20 480,60 576,40 
              C672,20 768,60 864,40 
              C960,20 1056,60 1152,40 
              C1248,20 1344,60 1440,30 
              L1440,0 
              Z"
            fill="#702c91"
          />
        </svg>
      </div>

      {/* Nyhetsseksjon – lilla med midtstilt innhold */}
      <section
        className="news-highlight-section position-relative overflow-hidden d-flex align-items-center"
        style={{
          backgroundColor: '#702c91',
          minHeight: '700px',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        {/* Dekorative sirkler */}
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>
        <div className="decorative-circle circle-4"></div>
        <div className="decorative-circle circle-5"></div>

        <Container>
          <Row className="align-items-center g-5 flex-column-reverse flex-md-row">
            {/* Tekstinnhold */}
            <Col
              md={6}
              className="fade-in-up z-1 text-center text-md-start d-flex flex-column align-items-center align-items-md-start"
            >
              <Badge bg="warning" className="mb-3 px-3 py-2 fs-3 text-dark pulse-badge">
                NYHET
              </Badge>
              <h2 className="fw-bold display-5 display-md-1 text-white">
                5,8L Açaí Purée
              </h2>
              <p className="text-white fs-5 mb-4 px-2 px-md-0">
                Rett fra Amazonas! En stor boks med vår silkemyke, 100 % naturlige açaí,
                perfekt for deg som elsker å lage egne bowls hjemme, til familien eller
                vennegjengen. Uten tilsatt sukker, med ekte brasiliansk smak og full av
                antioksidanter og energi.
              </p>
              <Link to="/produkt/tropisk-acai-delight">
                <Button variant="light" className="text-light-purple fw-semibold btn-lg">
                  Utforsk nyheten →
                </Button>
              </Link>
            </Col>

            {/* Bilde */}
            <Col
              md={6}
              className="fade-in-up z-1 d-flex justify-content-center align-items-center"
            >
              <img
                src="/assets/acaipuree3.png"
                alt="Tropisk Açaí 5.8L puree"
                className="img-fluid rounded-2"
                style={{
                  objectFit: 'cover',
                  maxWidth: '650px',
                  width: '100%',
                  minHeight: '300px',
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
