import React from 'react'
import { Nav,Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div>
          <Navbar bg="light" expand="lg" fixed="top" id="nvbr" >
            <Navbar.Brand href="#"><img src="../images/GuideMeLogo.png" alt="logo" className="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link className="topLi" href="/">Home</Nav.Link>
                    <Nav.Link className="topLi" href="/service">Services</Nav.Link>
                    <Nav.Link className="topLi" href="/contact">Contact Us</Nav.Link>
                    <Nav.Link to="/addguide" className="topLi" href="/addguide">Become a guide</Nav.Link>
                    <Nav.Link  id="signin" className="topLi" href="/login">Sign In</Nav.Link>
                    <Nav.Link id="join" href="/join">Join</Nav.Link>
                    </Nav>
                </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu
