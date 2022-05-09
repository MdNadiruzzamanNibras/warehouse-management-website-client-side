import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const handleLogOut = ()=>{
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >Authentic Grocery</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/manageitem'>manage item</Nav.Link>
      <Nav.Link as={Link} to='/addItem'>add item</Nav.Link>
      <Nav.Link as={Link} to='/myItem'>My Item</Nav.Link>
      <Nav.Link as={Link} to='/blog'>blogs</Nav.Link>
      <Nav.Link as={Link} to='/takeReview'>Give Feedback</Nav.Link>
    
      { user ?
         <button  className='btn btn-link text-white text-decoration-none' onClick={handleLogOut}>Log Out</button>
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