import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init'


const Header = () => {

  // Auth State
  const [user, loading, error] = useAuthState(auth);

  // Log Out
  const logOut = () => {
    signOut(auth)
  }
    return (
        <Navbar style={{ background: "#008080"}} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">Cars-Stock</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            {
              user?.uid ? <>
              <Nav.Link as={Link} to="/manageInventory">Manage-Items</Nav.Link>
              <Nav.Link as={Link} to="/myItems">My-Items</Nav.Link>
              <Nav.Link as={Link} to="/reviews">Your-Reviews</Nav.Link>
              <Nav.Link onClick={logOut}>Log-Out</Nav.Link>
              </> : 
              <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;