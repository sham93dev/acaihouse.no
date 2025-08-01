// src/components/page-section/home/HomeBanner.js
import React, { useState, useEffect, useCallback } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../../data/acaibowls';

function HomeBanner() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleClickOutside = useCallback((e) => {
    if (!e.target.closest('.thumbnail-wrapper')) {
      setActiveIndex(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const bannerProducts = products
    .filter((p) => p.topSeller === true)
    .map((p) => ({
      ...p,
      label: p.title,
      image: p.images?.[0] || '/assets/placeholder.jpg',
    }));

  return (
    <div className="home-banner w-100 position-relative" style={{ zIndex: 1 }}>
      {/* Desktop Layout */}
      <div className="d-none d-lg-block">
        <Container fluid className="g-0">
          <div className="row g-0 align-items-stretch flex-column-reverse flex-md-row banner-wrapper">
            <div className="col-12 col-md-6 p-0 order-3 order-md-1">
              <img
                src="/assets/acaihouse-banner.jpg"
                alt="Açaí bowls"
                className="img-fluid w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 p-md-5 order-1 order-md-2">
              <div className="row g-3 mt-0 pt-3 mb-5">
                {bannerProducts.map((bowl, i) => (
                  <div className="col-4" key={`desktop-thumb-${i}`}>
                    <Link to={`/produkt/${bowl.slug}`} className="text-decoration-none">
                      <div className="thumbnail-wrapper position-relative">
                        <img
                          src={bowl.image}
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

              <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
                <p className="lead mb-0 text-green-light-100 fs-6 mt-2 fw-medium">
                  Fra Amazonas til Oslo – ekte açaí, akkurat som den skal smake.
                </p>

                <h1 className="fw-bold display-5 mb-3 mt-0 mt-md-0">
                  Fuel your body, not your cravings
                </h1>

                <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3 mb-5">
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
                    href="https://www.foodora.no"
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

        <div className="text-center banner-content-overlay position-absolute top-50 start-50 translate-middle px-3">
          <p className="lead text-green-light-100 fs-5">
            Fra Amazonas til Oslo – ekte açaí, akkurat som den skal smake.
          </p>
          <h1 className="fw-bold text-xl-display">
            Fuel your body, not your cravings
          </h1>

          <div className="d-flex flex-row flex-wrap justify-content-center gap-3 mt-3 w-100">
            <a
              href="https://wolt.com/nb/nor/oslo/restaurant/acai-house"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-success"
                className="btn-acai-primary px-3 py-2 d-flex align-items-center gap-2 large-button"
              >
                Bestill fra
                <img
                  src="./assets/wolt_logo.png"
                  alt="Wolt logo"
                  style={{ height: '22px', width: 'auto' }}
                />
              </Button>
            </a>
            <a
              href="https://www.foodora.no"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-danger"
                className="btn-acai-primary px-3 py-2 d-flex align-items-center gap-2 large-button"
              >
                Bestill fra
                <img
                  src="./assets/foodora_logo.png"
                  alt="Foodora logo"
                  style={{ height: '22px', width: 'auto' }}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Skrå avslutning – bilde til venstre, farge til høyre */}
<div
  className="position-absolute bottom-0 start-0 w-100 overflow-hidden"
  style={{ zIndex: 2 }}
>
  <svg
    viewBox="0 0 1440 150"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{ width: '100%', height: '40px', display: 'block' }}
  >
    <path
      d="
        M0,90 
        C10,90 20,100 100,70 
        C240,50 300,120 360,90 
        C420,70 480,140 540,100 
        C600,60 660,130 720,90 
        C780,50 840,110 900,80 
        C960,60 1020,120 1080,90 
        C1140,70 1200,130 1260,100 
        C1320,80 1380,110 1440,90 
        L1440,150 
        L0,150 
        Z"
      fill="#f8f9fa"
    />
  </svg>
</div>

    </div>
  );
}

export default HomeBanner;
