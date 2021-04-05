import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

/* Cards on Homepage Containing Links to Each Blog */
export class HomepageCards extends Component {
  render() {
    return (
      <>
        <CardDeck className="card-deck">
          <Card
            border="none"
            className="card-image"
            style={{
              width: "10rem",
            }}
          >
            <Card.Body className="work-card-body"></Card.Body>
            <Link to="/workbreak/blogs">
              <Card.Footer className="card-footer">
                Work Break <PauseFill />
              </Card.Footer>
            </Link>
          </Card>
          <br />

          <Card border="none" style={{ width: "10rem" }}>
            <Card.Body className="home-card-body"></Card.Body>
            <Link to="/homebreak/blogs">
              <Card.Footer className="card-footer">
                Home Break <PauseFill />
              </Card.Footer>
            </Link>
          </Card>
          <br />

          <Card border="none" style={{ width: "10rem" }}>
            <Card.Body className="play-card-body"></Card.Body>
            <Link to="/playbreak/blogs">
              <Card.Footer className="card-footer">
                Play Break <PlayFill />
              </Card.Footer>
            </Link>
          </Card>
          <br />
        </CardDeck>
      </>
    );
  }
}
export default HomepageCards;
