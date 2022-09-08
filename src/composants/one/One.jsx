import React from 'react'
import './one.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar,Form,Button } from 'react-bootstrap';
import logo from '../../assets/pn.png'


const One = () => {
  return (
    <Navbar bg="tete" variant='dark' >
    <Container fluid >
        <Navbar.Brand href="#home" >
        <img src={logo} alt="logo" className='img'  width="50"
              height="50" />{" "} CommitOne
        </Navbar.Brand>
        <Container >
            <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#products">Produits</Nav.Link>
                <Nav.Link href="#contact">Contacter Nous</Nav.Link>      
             <Form className="d-flex">
             <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
     </Nav>
        </Container>
    </Container>
</Navbar>
  )
}

export default One

