import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { Button as MaterialButton } from '@mui/material';

const useStyles = styled((theme) => ({
  heroSection: {
    background: 'url(/path/to/your/image.jpg) no-repeat center center',
    backgroundSize: 'cover',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    textAlign: 'center',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">MyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className={classes.heroSection}>
        <Container>
          <Row>
            <Col>
              <div className={classes.heroContent}>
                <h1>Welcome to MyShop</h1>
                <p>Your one-stop shop for all things amazing!</p>
                <MaterialButton variant="contained" color="primary">Shop Now</MaterialButton>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
