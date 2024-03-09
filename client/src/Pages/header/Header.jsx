import "./header.css";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    //const location = useLocation(); , useLocation
    const activeStyle = {
        color: "black",
        textDecoration: "underline",
    };

    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand className="brand" as={RouterNavLink} to="/home">
                    Data Structures
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={RouterNavLink}
                            to="/home"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={RouterNavLink}
                            to="/instructional-page"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Learn
                        </Nav.Link>
                        <Nav.Link
                            as={RouterNavLink}
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;
