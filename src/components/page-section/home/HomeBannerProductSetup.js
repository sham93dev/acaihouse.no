import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Image
} from 'react-bootstrap';

function HomeBannerProductSetup() {
  const { slug } = useParams();

  const bowls = {
    bowl1: {
      title: 'Berry Power Boost',
      price: 129,
      images: [
        '/assets/bowl1.jpg',
        '/assets/bowl1-alt1.jpg',
        '/assets/bowl1-alt2.jpg',
      ],
      description:
        '⚡️ Full av antioksidanter og naturlig energi. Perfekt før eller etter trening – eller når du trenger et boost! 💥🍓',
      toppings: ['🍒 Gojibær', '🍓 Jordbærbiter', '🥣 Granola', '🥜 Peanøttsmør (valgfritt)'],
      allergens: ['🌱 Chiafrø', '🥥 Kokos', '🌾 Havre (i granola)'],
    },
    bowl2: {
      title: 'Energiboost',
      price: 119,
      images: ['/assets/bowl2.jpg'],
      description: 'En fyldig blanding med kakao, banan og granola. Kraftpakke i en bowl. 🚀',
      toppings: ['🍫 Kakao', '🍌 Banan', '🥣 Granola', '🥜 Peanøttsmør'],
      allergens: ['🥜 Peanøtt', '🌾 Havre'],
    },
    bowl3: {
      title: 'Amazon Mix',
      price: 125,
      images: ['/assets/bowl3.jpg'],
      description: 'Smak av Brasil – ekte açaí, pasjonsfrukt og chia. 🌴🍇',
      toppings: ['🥭 Açaí', '🍊 Pasjonsfrukt', '🌱 Chiafrø', '🍓 Jordbær'],
      allergens: ['🌱 Chiafrø', '🥥 Kokos'],
    },
  };

  const bowl = bowls[slug];
  if (!bowl) {
    return (
      <Container className="py-5">
        <h1>Produkt ikke funnet</h1>
        <p>Vi kunne ikke finne informasjon om dette produktet.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="py-5">
      <div className="p-4 p-md-5 bg-light rounded-4 shadow-sm">
        <Row className="gy-5">
          {/* Bildekarusell */}
          <Col lg={6}>
            <Carousel fade interval={4000} className="shadow rounded overflow-hidden">
              {bowl.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img className="d-block w-100" src={img} alt={`${bowl.title} ${idx}`} />
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Thumbnails */}
            <Row className="mt-3 g-2 d-none d-md-flex">
              {bowl.images.map((img, idx) => (
                <Col xs={4} key={idx}>
                  <Image src={img} alt={`thumb-${idx}`} thumbnail className="w-100" />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Tekst og info */}
          <Col lg={6} className='p-5'>
            <h1 className="fw-bold mb-2 display-2">{bowl.title}</h1>
            <h4 className="text-success mb-3 fs-1">kr {bowl.price},-</h4>
            <p className="lead">{bowl.description}</p>

            {/* Innhold + Allergener */}
            <Row className="mt-4 row-cols-2">
              <Col>
                <h5>🥗 Innhold</h5>
                <ul className="list-unstyled">
                  {bowl.toppings.map((item, idx) => (
                    <li key={idx}>✔️ {item}</li>
                  ))}
                </ul>
              </Col>
              <Col>
                <h5 className="text-danger">⚠️ Allergener</h5>
                <ul className="list-unstyled text-danger">
                  {bowl.allergens.map((item, idx) => (
                    <li key={idx}>🚫 {item}</li>
                  ))}
                </ul>
              </Col>
            </Row>

            {/* CTA */}
            <Card className="mt-4 p-3 bg-white border-0 shadow-sm">
              <h6 className="fw-semibold mb-3">Bestill via:</h6>
              <div className="d-flex flex-column flex-md-row gap-3">
                <a
                  href="https://wolt.com/nb/nor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success w-100"
                >
                  Wolt
                </a>
                <a
                  href="https://www.foodora.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger w-100"
                >
                  Foodora
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HomeBannerProductSetup;
