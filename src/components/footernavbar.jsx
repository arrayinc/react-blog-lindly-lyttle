import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Envelope } from "react-bootstrap-icons";

export class FooterNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar
          sticky="bottom"
          className="footer-navbar"
          bg="light"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <p className="copyright-text">
              © 2021 Break Inc.
              <br />
              Cookie Policy
            </p>
            <p className="copyright-text">
              Privacy Policy
              <br />
              Terms + Agreements
            </p>
            <Nav className="footer-navbar-icons">
              <Nav.Link href="/">
                <Facebook />
              </Nav.Link>
              <Nav.Link href="/about">
                <Instagram />
              </Nav.Link>
              <Nav.Link href="/about">
                <Twitter />
              </Nav.Link>
              <Nav.Link href="/contact">
                <Envelope />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default FooterNavbar;
