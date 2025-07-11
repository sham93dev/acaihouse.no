// src/components/page-section/home/HomeBanner.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <div className="home-banner w-100">
      <Container fluid className="g-0">
        <div className="row g-0 align-items-stretch flex-column-reverse flex-md-row banner-wrapper">
          
          {/* Banner image (bottom on mobile, left on desktop) */}
          <div className="col-12 col-md-6 p-0 order-3 order-md-1">
            <img
              src="/assets/acaihouse-banner.jpg"
              alt="Açaí bowls"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Content section (text + small images) */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-md-2">

            {/* Thumbnails on mobile */}
            <div className="row g-3 mb-4 d-md-none">
              {['bowl1', 'bowl2', 'bowl3'].map((bowl, i) => (
                <div className="col-4" key={i}>
                  <img
                    src={`/assets/${bowl}.jpg`}
                    alt={`Bowl ${i + 1}`}
                    className="img-fluid rounded home-banner-thumb"
                  />
                </div>
              ))}
            </div>
                        {/* Thumbnails on desktop */}
            <div className="row g-3 mt-0 pt-3 d-none d-md-flex mb-5">
              {['bowl1', 'bowl2', 'bowl3'].map((bowl, i) => (
                <div className="col-4" key={`desktop-thumb-${i}`}>
                  <img
                    src={`/assets/${bowl}.jpg`}
                    alt={`Bowl ${i + 1}`}
                    className="img-fluid rounded home-banner-thumb"
                  />
                </div>
              ))}
            </div>

            {/* Main Text and CTA */}
            <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
              <p className="lead mb-0 text-green-light-100 fs-5 mt-2">
                Fra Amazonas til Oslo – ekte açaí, akkurat som den skal smake.
              </p>

              <h1 className="fw-bold text-xl-display  mb-3 mt-0 mt-md-0">
                Fuel your body, not your cravings
              </h1>

              <Link to="/acai" className="text-decoration-none">
                <Button
                  variant="outline-success"
                  className="btn-acai-primary btn-lg px-4 py-2 mb-3 d-flex align-items-center gap-2 mt-5"
                >
                  Bestill fra Wolt
                  <img
                    src="./assets/wolt_logo.png"
                    alt="Wolt logo"
                    style={{ height: '29px', width: 'auto' }}
                  />
                </Button>
              </Link>
            </div>



          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeBanner;
