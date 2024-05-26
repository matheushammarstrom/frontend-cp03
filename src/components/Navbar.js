import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Navbar.scss';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            MediaStoreFlix
          </Navbar.Brand>
          <Nav.Link as={Link} to="/" className="d-lg-none mobile-nav-link">Filmes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
