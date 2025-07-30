// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">AcaiHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="acai-navbar" />
        <Navbar.Collapse id="acai-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/bestill">Bestill</Nav.Link>
            <Nav.Link as={Link} to="/acai">Acai</Nav.Link>
            <Nav.Link as={Link} to="/kontakt">Kontakt oss</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
