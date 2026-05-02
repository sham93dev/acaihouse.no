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
  Breadcrumb,
  Accordion,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products } from '../../data/acaibowls';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [size, setSize] = useState('Medium');
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return (
      <Container className="py-5">
        <h1>Produkt ikke funnet</h1>
        <p>Vi kunne ikke finne informasjon om dette produktet.</p>
      </Container>
    );
  }

  const getPrice = () => {
    return product.sizes?.[size] || product.price || 0;
  };

  return (
    <Container className="py-5">
      {/* 🔗 Breadcrumbs */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/produkter' }}>
          Alle produkter
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="gx-5 gy-5 align-items-start">
        {/* 📸 Bilder */}
        <Col lg={6}>
          <Carousel
            fade
            interval={null}
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            className="rounded overflow-hidden"
            touch={true}
          >
            {product.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`${product.title} ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Row className="mt-3 g-2 product-thumbnails">
            {product.images.map((img, idx) => (
              <Col xs={3} sm={2} md={4} key={idx}>
                <Image
                  src={img}
                  alt={`thumb-${idx}`}
                  thumbnail
                  onClick={() => setActiveIndex(idx)}
                  className={`w-100 ${idx === activeIndex ? 'active' : ''}`}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* 📝 Info */}
        <Col lg={6}>
          <Badge
            bg="purple"
            className="mb-2 text-white px-3 py-1"
            style={{ backgroundColor: '#702c91' }}
          >
            {product.category}
          </Badge>
          <h2 className="fw-bold display-3 text-light-purple">{product.title}</h2>
          <h4 className="text-black mb-3 fs-1">
            Kr {getPrice().toLocaleString('no-NO')},-
          </h4>
          <p>{product.description}</p>

          {/* 🔘 Velg størrelse */}
          {product.sizes && (
            <Form.Group className="mb-4 mt-1" controlId="sizeSelect">
              <Form.Label className="fw-semibold">Velg størrelse</Form.Label>
              <Form.Select
                aria-label="Velg størrelse"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {Object.entries(product.sizes).map(([label, _price]) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          )}

          {/* 🛍️ Bestillingsknapper */}
          <div className="d-flex flex-column gap-3 mb-4">
            <a
              href="https://wolt.com/nb/nor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wolt d-flex align-items-center justify-content-center gap-2 w-100 py-3 fs-5"
            >
              Bestill fra
              <img
                src="/assets/wolt-btn-logo.png"
                alt="Wolt"
                style={{ height: '16px', width: 'auto' }}
              />
            </a>

            <a
              href="https://www.foodora.no"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-foodora d-flex align-items-center justify-content-center gap-2 w-100 py-3 fs-5"
            >
              Bestill fra
              <img
                src="/assets/foodora-btn-logo.png"
                alt="Foodora"
                style={{ height: '16px', width: 'auto' }}
              />
            </a>
          </div>

          {/* 🟢 Status */}
          <div className="mt-4">
            <h6 className="fw-semibold mb-1">Lagestatus</h6>
            <p className="mb-2 my-2">🟢 Tilgjengelig for levering</p>
          </div>

          {/* 📦 Leverandørinfo */}
          <Card className="mb-4 p-3 border-0 bg-light mt-2">
            <h6 className="fw-semibold mb-2">Tilgjengelig hos</h6>
            <small className="mb-0">Kan bestilles hos både Wolt og Foodora</small>
          </Card>

          {/* 🧾 Accordion for innhold og allergener */}
          <div className="mb-4">
            <Accordion defaultActiveKey="">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ingredienser & Allergener</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-wrap">
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
                      <div style={{ flex: '1 1 0%' }}>
                        <h5 className="mb-2">Allergener</h5>
                        <ul className="list-unstyled text-danger mb-0">
                          {product.allergens.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
