import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { PauseCircle } from "react-bootstrap-icons";

export class SiteNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            Break
            <PauseCircle />
            {"  "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/workbreak">
                  Work BREAK
                </NavDropdown.Item>
                <NavDropdown.Item href="/homebreak">
                  Home BREAK
                </NavDropdown.Item>
                <NavDropdown.Item href="/playbreak">
                  Play BREAK
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form inline></Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default SiteNavbar;
