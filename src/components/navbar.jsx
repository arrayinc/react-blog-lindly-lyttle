import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { PauseCircle, PersonCircle } from "react-bootstrap-icons";
import ScrollToTop from '../components/scroll-to-top';

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
              <a className="nav-right-text" href="#">
                <PersonCircle />
                &nbsp;Login
              </a>
            </li>
          </ul>
          <ScrollToTop />
        </Navbar>
      </div>
    );
  }
}
export default SiteNavbar;
