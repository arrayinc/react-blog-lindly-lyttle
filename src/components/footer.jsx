import React, { Component } from "react";
import { Nav, Col } from "react-bootstrap";

/* Footer Containing Links to Site Pages */
export class Footer extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="footer-column">
        <Col>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Col>
        <Col>
          <Nav.Link href="/workbreak/blogs">Work Break</Nav.Link>
          <Nav.Link href="/homebreak/blogs">Home Break</Nav.Link>
          <Nav.Link href="/playbreak/blogs">Play Break</Nav.Link>
        </Col>
      </Nav>
    );
  }
}
export default Footer;
