import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BackgroundPhoto } from "../images/WorkBreakPage/workbreakblog2.jpg";
import {
  PauseFill,
  PlayFill,
  CalendarEvent,
  House,
  CloudMinus,
} from "react-bootstrap-icons";

export class HomepageCards extends Component {
  render() {
    return (
      <>
        <CardDeck className="card-deck">
          <Card
            border="primary"
            className="card-image"
            style={{
              width: "10rem",
            }}
          >
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Link to="/workbreak">
              <Card.Footer>
                <PauseFill /> Work
              </Card.Footer>
            </Link>
          </Card>
          <br />

          <Card border="success" style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Link to="/homebreak">
              <Card.Footer>
                <PauseFill /> Home
              </Card.Footer>
            </Link>
          </Card>
          <br />

          <Card border="warning" style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Link to="/playbreak">
              <Card.Footer>
                <PlayFill /> Play
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
