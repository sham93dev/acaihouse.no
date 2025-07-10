// src/components/page-section/home/HomeBanner.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <div className="home-banner w-100">
      <Container fluid className="g-0">
        <div className="row g-0 align-items-stretch banner-wrapper flex-column-reverse flex-md-row">
          {/* Bilde – nederst på mobil, venstre på desktop */}
          <div className="col-12 col-md-6 p-0 order-3 order-md-1">
            <img
              src="/assets/acaihouse-banner.jpg"
              alt="Acai bowls"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Tekst og småbilder – høyre på desktop, øverst på mobil */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-md-2">
            {/* Småbilder øverst på mobil */}
            <div className="row g-3 mb-4 d-md-none">
              <div className="col-4">
                <img src="/assets/bowl1.jpg" alt="Bowl 1" className="img-fluid rounded home-banner-thumb" />
              </div>
              <div className="col-4">
                <img src="/assets/bowl2.jpg" alt="Bowl 2" className="img-fluid rounded home-banner-thumb" />
              </div>
              <div className="col-4">
                <img src="/assets/bowl3.jpg" alt="Bowl 3" className="img-fluid rounded home-banner-thumb" />
              </div>
            </div>

            {/* Tekst og knapp */}
            <div className="text-center text-md-start">
              <h1 className="fw-bold display-1 mb-3 mt-3 mt-md-5">
                Fuel your body, <br className="d-none d-lg-block" />
                not your cravings
              </h1>
              <p className="lead mb-4 text-green-light-100 fs-4">
                Fra Amazonas til Oslo – ekte açaí, akkurat som den skal smake.
              </p>
              <Link to="/acai">
                <Button variant="outline-success" className="btn-acai-primary btn-lg px-4 py-2 mb-3">
                  Les mer
                </Button>
              </Link>
            </div>

            {/* Småbilder nederst på desktop */}
            <div className="row g-3 mt-5 d-none d-md-flex">
              <div className="col-4">
                <img src="/assets/bowl1.jpg" alt="Bowl 1" className="img-fluid rounded home-banner-thumb" />
              </div>
              <div className="col-4">
                <img src="/assets/bowl2.jpg" alt="Bowl 2" className="img-fluid rounded home-banner-thumb" />
              </div>
              <div className="col-4">
                <img src="/assets/bowl3.jpg" alt="Bowl 3" className="img-fluid rounded home-banner-thumb" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeBanner;
