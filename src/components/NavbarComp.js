import React from "react";
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import image from "../image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink>
              <Link
                to="/"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </NavLink>
            <NavLink>
              <Link
                to="/movies"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Movies
              </Link>
            </NavLink>
          </Nav>
          <Nav>
            <Button variant="outline-danger" className="me-2">
            <Link
                to="/login"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Login <FontAwesomeIcon icon={faUserCircle} className="ms-3" />
              </Link>
              
            </Button>
            <Button variant="outline-danger">
              <Link
                to="/search"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Search <FontAwesomeIcon  icon={faSearch} className="ms-3" />
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
