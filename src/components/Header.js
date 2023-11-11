import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const handleLogout = () => {
    
    window.location.href = '/login';
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" py="30">
        <Container>
          <p  className="text-decoration-none text-light mx-0 
          ">
            E-Library 
          </p>
          <Nav className="me-auto">
            {/* <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">Features</NavLink> */}
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout} className="text-decoration-none text-light">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
