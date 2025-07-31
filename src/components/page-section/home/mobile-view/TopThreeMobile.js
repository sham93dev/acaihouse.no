// src/components/home/TopThreeMobile.js
import React, { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { products } from '../../../../data/acaibowls';

export default function TopThreeMobile() {
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
    <div className="d-block d-lg-none pt-4">
      <div className="text-center">
        <h2 className="fw-bold fs-1 text-light-purple">Våre bestselgere</h2>
      </div>

      <Container className="pt-4 px-5">
        <div className="row g-3">
          {bannerProducts.map((bowl, i) => (
            <div className="col-4" key={`mobile-thumb-${i}`}>
              <div
                className={`thumbnail-wrapper position-relative ${activeIndex === i ? 'active' : ''}`}
                onClick={() => {
                  if (activeIndex === i) {
                    navigate(`/produkt/${bowl.slug}`);
                  } else {
                    setActiveIndex(i);
                  }
                }}
              >
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
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}