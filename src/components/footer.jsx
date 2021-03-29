import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { PauseCircle, PersonCircle } from "react-bootstrap-icons";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/workbreak">Blog</Nav.Link>
        </Nav>
      </div>
    );
  }
}
export default Footer;
