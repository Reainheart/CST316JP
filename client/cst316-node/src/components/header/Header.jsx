import React from "react";
import "./header.css";

import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand className="brand" href="/">
                    Data Structures
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;
