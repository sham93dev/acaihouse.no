// src/components/home/FeaturedProductsSection.js
import React, { useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { products } from '../../../data/acaibowls';
import ProductCard from '../../ui/ProductCards';
import { Link } from 'react-router-dom';

function getRandomProducts(arr, n) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}

export default function FeaturedProductsSection() {
  const featured = products.filter((p) => p.featured);
  const randomProducts = useMemo(() => getRandomProducts(featured, 4), [featured]);

  return (
    <>
      <section className="featured-products-section py-5 px-3 px-md-5 pt-4 bg-light position-relative">
        <Container>
          <div className="text-center mb-4 pt-5 pb-3">
            <h2 className="fw-bold display-4 text-light-purple">Hvilken blir din favoritt?</h2>
            <p className="text-muted fs-5">Ekte açaí – Slik det smaker i Brasil</p>
          </div>

          <Row>
            {randomProducts.map((product) => (
              <Col xs={6} md={3} key={product.slug} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Link to="/produkter">
              <Button className="bg-light-purple border-0 btn-lg" variant="primary">
                Jeg vil se alle
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Bølgeovergang */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
            fill="#f8f9fa" // Bootstrap bg-light
          />
        </svg>
      </div>
    </>
  );
}
