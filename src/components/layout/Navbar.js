import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="shadow-sm py-2"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-4">
          <img
            src="/assets/acaihouse-logo.png"
            alt="AcaiHouse logo"
            style={{ height: '50px', width: 'auto' }}
            className="d-inline-block align-middle"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="acai-navbar" />

        <Navbar.Collapse id="acai-navbar">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Hjem
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link-custom">
              Bestill
            </Nav.Link>
            <Nav.Link as={Link} to="/acai" className="nav-link-custom">
              Acai
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Kontakt oss
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              Om oss
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
