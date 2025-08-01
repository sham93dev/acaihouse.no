import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#23022e' }} className="pt-5 pb-4 mt-5 text-white">
      <Container>
        <Row className="gy-4">
          {/* Kort om oss */}
          <Col md={4}>
            <h5 className="fw-bold">Acai House</h5>
            <p className="small">
              Ekte açaí rett fra Amazonas. Vi leverer kvalitet og smak – akkurat slik det skal smake.
            </p>
          </Col>

          {/* Snarveier */}
          <Col xs={6} md={3}>
            <h6 className="text-uppercase fw-semibold mb-3">Snarveier</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="footer-link">Hjem</Link></li>
              <li><Link to="/produkter" className="footer-link">Produkter</Link></li>
              <li><Link to="/om-oss" className="footer-link">Om oss</Link></li>
              <li><Link to="/kontakt" className="footer-link">Kontakt</Link></li>
            </ul>
          </Col>

          {/* Kundeservice */}
          <Col xs={6} md={3}>
            <h6 className="text-uppercase fw-semibold mb-3">Kundeservice</h6>
            <ul className="list-unstyled small">
              <li>support@acaihouse.no</li>
              <li>463 92 898 / 453 91 502</li>
              <li>St. Olavs Gate 8A</li>
              <li>0165 Oslo</li>
              <li>Org.nr: 935 427 630</li>
            </ul>
          </Col>

          {/* Sosiale medier */}
          <Col md={2}>
            <h6 className="text-uppercase fw-semibold mb-3">Følg oss</h6>
            <div className="d-flex gap-3 fs-4">
              <a
                href="https://www.instagram.com/acaihouse"
                className="footer-link d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a href="mailto:support@acaihouse.no" className="footer-link d-flex align-items-center">
                <Mail size={20} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-white opacity-25 mt-5" />

        <p className="text-center small text-white mb-0">
          © {new Date().getFullYear()} Acai House. Alle rettigheter reservert.
        </p>
      </Container>
    </footer>
  );
}
