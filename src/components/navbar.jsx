import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { PauseCircle, PersonCircle } from "react-bootstrap-icons";

/* Header Site Navbar */
export class SiteNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="nav-title" href="/">
            Break &nbsp;
            <PauseCircle />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-main-text">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/workbreak/blogs">
                  Work BREAK
                </NavDropdown.Item>
                <NavDropdown.Item href="/homebreak/blogs">
                  Home BREAK
                </NavDropdown.Item>
                <NavDropdown.Item href="/playbreak/blogs">
                  Play BREAK
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline></Form>
          </Navbar.Collapse>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a className="nav-right-text" href="/contact">
                Contact &nbsp; &nbsp;
              </a>
            </li>
            <br />
            <li>
              <a className="nav-right-text" href="">
                <PersonCircle />
                &nbsp;Login
              </a>
            </li>
          </ul>
        </Navbar>
      </div>
    );
  }
}
export default SiteNavbar;
