// src/components/ui/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const image = product.image || product.images?.[0];
  const price =
    product.sizes?.Medium ||
    product.price ||
    Object.values(product.sizes || {})[0] ||
    0;

  return (
    <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden product-card">
      <Link to={`/produkt/${product.slug}`} className="text-decoration-none text-dark">
        <Card.Img
          variant="top"
          src={image}
          alt={product.title}
          className="object-fit-cover"
          style={{ height: '200px', width: '100%' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold fs-5 mb-1">{product.title}</Card.Title>
          <Card.Text className="text-muted mb-2">Kr {price.toLocaleString('no-NO')},-</Card.Text>
          <div className="mt-auto text-end">
            <span className="small fw-semibold text-light-purple">Les mer →</span>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}
