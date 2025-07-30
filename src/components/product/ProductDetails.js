import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Badge,
  Image,
  Card,
  Carousel,
  Form,
} from 'react-bootstrap';
import { products } from '../../data/acaibowls';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [size, setSize] = useState(''); // Liten, Stor, eller tom

  if (!product) {
    return (
      <Container className="py-5">
        <h1>Produkt ikke funnet</h1>
        <p>Vi kunne ikke finne informasjon om dette produktet.</p>
      </Container>
    );
  }

  // Prislogikk
  const getAdjustedPrice = () => {
    if (size === 'Liten') return product.price - 20;
    if (size === 'Stor') return product.price + 20;
    return product.price;
  };

  return (
    <Container className="py-5">
      <Row className="gx-5 gy-5 align-items-start">
        {/* Bilder */}
        <Col lg={6}>
          <Carousel fade interval={null} className="rounded overflow-hidden">
            {product.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img className="d-block w-100" src={img} alt={`${product.title} ${idx}`} />
              </Carousel.Item>
            ))}
          </Carousel>

          <Row className="mt-3 g-2 d-none d-md-flex">
            {product.images.map((img, idx) => (
              <Col xs={4} key={idx}>
                <Image src={img} alt={`thumb-${idx}`} thumbnail className="w-100 border-0" />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Info */}
        <Col lg={6}>
          <Badge
            bg="purple"
            className="mb-2 text-white px-3 py-1"
            style={{ backgroundColor: '#702c91' }}
          >
            {product.category}
          </Badge>
          <h2 className="fw-bold display-3">{product.title}</h2>
          <h4 className="text-muted mb-3 fs-1">
            Kr {getAdjustedPrice().toLocaleString('no-NO')},-
          </h4>
          <p>{product.description}</p>

          {/* Størrelsevalg */}
          <Form.Group className="mb-4 mt-1" controlId="sizeSelect">
            <Form.Label className="fw-semibold">Velg størrelse</Form.Label>
            <Form.Select
              aria-label="Velg størrelse"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Velg størrelse</option>
              <option value="Liten">Liten</option>
              <option value="Stor">Stor</option>
            </Form.Select>
          </Form.Group>

          {/* Innhold + allergener */}
          <div className="d-flex flex-wrap mt-4" style={{ gap: '10px' }}>
            {product.toppings?.length > 0 && (
              <div style={{ flex: '1 1 0%' }}>
                <h5 className="mb-2">Innhold</h5>
                <ul className="list-unstyled mb-0">
                  {product.toppings.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.allergens?.length > 0 && (
              <div style={{ flex: '1 1 40%' }}>
                <h5 className="mb-2">Allergener</h5>
                <ul className="list-unstyled text-danger mb-0">
                  {product.allergens.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4">
            <h6 className="fw-semibold mb-1">Lagestatus</h6>
            <p className="mb-2 my-2">🟢 Tilgjengelig for levering</p>
          </div>

          <Card className="mb-4 p-3 border-0 bg-light mt-2">
            <h6 className="fw-semibold mb-2">Tilgjengelig hos</h6>
            <p className="mb-0">Kan bestille hos både Wolt og Foodora</p>
          </Card>

          <div className="d-flex flex-column flex-md-row gap-3 btn-lg">
            <a
              href="https://wolt.com/nb/nor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info text-white fw-semibold"
              aria-label={`Bestill ${product.title} fra Wolt`}
            >
              Bestill fra Wolt
            </a>
            <a
              href="https://www.foodora.no"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger text-white fw-semibold"
              aria-label={`Bestill ${product.title} fra Foodora`}
            >
              Bestill fra Foodora
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
