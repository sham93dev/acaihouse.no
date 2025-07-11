// src/components/page-section/home/HomeBanner.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
  const bowls = [
    { name: 'bowl1', label: 'Tropisk Drøm' },
    { name: 'bowl2', label: 'Energiboost' },
    { name: 'bowl3', label: 'Amazon Mix' },
  ];

  return (
    <div className="home-banner w-100">
      {/* Desktop Layout */}
      <div className="d-none d-lg-block">
        <Container fluid className="g-0">
          <div className="row g-0 align-items-stretch flex-column-reverse flex-md-row banner-wrapper">
            {/* Banner image */}
            <div className="col-12 col-md-6 p-0 order-3 order-md-1">
              <img
                src="/assets/acaihouse-banner.jpg"
                alt="Açaí bowls"
                className="img-fluid w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Content */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-md-2">
              {/* Thumbnails */}
              <div className="row g-3 mt-0 pt-3 d-none d-md-flex mb-5">
                {bowls.map((bowl, i) => (
                  <div className="col-4" key={`desktop-thumb-${i}`}>
                    <Link to={`/produkt/${bowl.name}`} className="text-decoration-none">
                      <div className="thumbnail-wrapper position-relative">
                        <img
                          src={`/assets/${bowl.name}.jpg`}
                          alt={bowl.label}
                          className="img-fluid home-banner-thumb"
                        />
                        <div className="thumbnail-overlay d-flex flex-column justify-content-center align-items-center text-center px-2">
                          <span className="thumbnail-title mb-1">{bowl.label}</span>
                          <span className="thumbnail-readmore text-accent small">Les mer →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Text and CTA */}
              <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
                <p className="lead mb-0 text-green-light-100 fs-5 mt-2">
                  Fra Amazonas til Oslo – ekte açaí, akkurat som den skal smake.
                </p>

                <h1 className="fw-bold text-xl-display mb-3 mt-0 mt-md-0">
                  Fuel your body, not your cravings
                </h1>

                <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3">
                  <a
                    href="https://wolt.com/nb/nor/oslo/restaurant/acai-house"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      className="btn-acai-outline btn-lg px-4 py-2 d-flex align-items-center gap-2"
                    >
                      Bestill fra
                      <img
                        src="./assets/wolt_logo.png"
                        alt="Wolt logo"
                        style={{ height: '29px', width: 'auto' }}
                      />
                    </Button>
                  </a>

                  <a
                    href="https://www.foodora.no/restaurant/some-id/acai-house"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline-danger"
                      className="btn-acai-primary btn-lg px-4 py-2 d-flex align-items-center gap-2"
                    >
                      Bestill fra
                      <img
                        src="./assets/foodora_logo.png"
                        alt="Foodora logo"
                        style={{ height: '29px', width: 'auto' }}
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile + Tablet Layout */}
      <div className="d-block d-lg-none home-banner-mobile position-relative text-white">
        <div className="mobile-banner-image position-relative w-100 h-100">
          <img
            src="/assets/acaihouse-banner.jpg"
            alt="Açaí bowls"
            className="img-fluid w-100"
          />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>

        {/* Overlay text + CTA */}
        <div className="banner-content-overlay position-absolute top-50 start-50 translate-middle px-3">
          <p className="lead text-green-light-100 fs-5">
            Fra Amazonas til Oslo – ekte açaí, akkurat som den skal smake.
          </p>
          <h1 className="fw-bold text-xl-display">
            Fuel your body, not your cravings
          </h1>
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3">
            <a
              href="https://wolt.com/nb/nor/oslo/restaurant/acai-house"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-success"
                className="btn-acai-primary btn-lg px-4 py-2 d-flex align-items-center gap-2"
              >
                Bestill fra Wolt
                <img
                  src="./assets/wolt_logo.png"
                  alt="Wolt logo"
                  style={{ height: '29px', width: 'auto' }}
                />
              </Button>
            </a>
            <a
              href="https://www.foodora.no/restaurant/some-id/acai-house"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-danger"
                className="btn-acai-primary btn-lg px-4 py-2 d-flex align-items-center gap-2"
              >
                Bestill fra Foodora
                <img
                  src="./assets/foodora_logo.png"
                  alt="Foodora logo"
                  style={{ height: '29px', width: 'auto' }}
                />
              </Button>
            </a>
          </div>
        </div>

        {/* Thumbnails under banner */}
        <Container className="p-5">
          <div className="row g-3">
            {bowls.map((bowl, i) => (
              <div className="col-4" key={`mobile-thumb-${i}`}>
                <Link to={`/produkt/${bowl.name}`} className="text-decoration-none">
                  <div className="thumbnail-wrapper position-relative">
                    <img
                      src={`/assets/${bowl.name}.jpg`}
                      alt={bowl.label}
                      className="img-fluid home-banner-thumb"
                    />
                    <div className="thumbnail-overlay d-flex flex-column justify-content-center align-items-center text-center px-2">
                      <span className="thumbnail-title mb-1">{bowl.label}</span>
                      <span className="thumbnail-readmore text-accent small">Les mer →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HomeBanner;
