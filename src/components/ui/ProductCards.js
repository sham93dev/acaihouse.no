import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const image = product.image || product.images?.[0];
  const price =
    product.sizes?.Medium ||
    product.price ||
    Object.values(product.sizes || {})[0] ||
    0;

  return (
    <Card className="product-card h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative">
      {/* ✅ Badges */}
      {product.isNew && (
        <Badge
          bg="warning"
          className="position-absolute top-0 start-0 m-2 text-dark fw-semibold"
        >
          Nyhet
        </Badge>
      )}
      {product.topSeller && (
        <Badge
          bg="danger"
          className="position-absolute top-0 end-0 m-2 text-white fw-semibold"
        >
          Bestselger
        </Badge>
      )}

      <Link to={`/produkt/${product.slug}`} className="text-decoration-none text-dark">
        <Card.Img
          variant="top"
          src={image}
          alt={product.title}
          className="product-card-img"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="product-card-title fw-bold">
            {product.title}
          </Card.Title>
          <Card.Text className="product-card-price text-muted">
            Kr {price.toLocaleString('no-NO')},-
          </Card.Text>
          <div className="mt-auto text-end">
            <span className="small fw-semibold text-light-purple">Les mer →</span>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}
