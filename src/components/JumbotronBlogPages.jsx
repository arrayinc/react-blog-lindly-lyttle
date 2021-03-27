import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

export class JumbotronForBlogs extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
        </Container>
      </Jumbotron>
    );
  }
}
export default JumbotronForBlogs;
