import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/workbreak">Blog</Nav.Link>
      </Nav>
    );
  }
}
export default Footer;
