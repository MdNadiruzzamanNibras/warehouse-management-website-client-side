import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const hanleSignOut = ()=>{
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link as={Link} to='/manageitem'>manage item</Nav.Link>
      <Nav.Link as={Link} to='/addItem'>add item</Nav.Link>
      <Nav.Link as={Link} to='/blog'>blogs</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/login'>login</Nav.Link>
      { user ?
         <button style={{fontSize:'20px'}} className='btn btn-link text-white text-decoration-none' onClick={hanleSignOut}>sign out</button>
              :
         <Nav.Link as={Link} to="login">
            Login
          </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;