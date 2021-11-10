import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../images/logo.svg';
import { Cart, People } from 'react-bootstrap-icons';


const MyNavbar = () => {
  return (
    <div>
      <Navbar style={{backgroundColor:"#feee00"}} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex" style={{ width: '70%' }}>
              <FormControl
                type="search"
                placeholder="what are you looking for?"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
            <p>Cart</p>
          <Cart className="m-3" size={25} />
          <p>Sign In</p>
          <People size={25} />

        </Container>

      </Navbar>
    </div>
  )
}

export default MyNavbar;
