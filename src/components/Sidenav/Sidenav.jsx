import React from 'react';
import './Sidenav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Sidenav = () => {
    return (
        <div style={{ height: '100vh' }}>
        <Navbar bg="light" expand="lg" style={{ height: '100%' }}>
          <Container style={{marginBottom:'auto'}}>
            <Navbar.Toggle aria-controls="responsive-side-nav" />
            <Navbar.Collapse id="responsive-side-nav">
              <Nav className="me-auto mb-auto flex-column" style={{ height: '100%' }}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Sidenav;