import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/">
      <h1>
        <i className="fab fa-github"></i> Cat API
      </h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
