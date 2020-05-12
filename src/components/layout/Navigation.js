import React from 'react';
import { Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/">
      <h1>
        <i className="fab fa-github"></i> Cat API
      </h1>
    </Navbar.Brand>
  </Navbar>
);

export default Navigation;
