import React, { Component } from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  PauseFill,
  PlayFill,
  CalendarEvent,
  House,
  CloudMinus
} from "react-bootstrap-icons";

export class CardsForBlogs extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card-fade">
          <CalendarEvent className="card-icons" />
          <Card.Body>
            <Card.Title>
              <large className="text-muted">Work BREAK</large>
            </Card.Title>
            <Card.Text className="text-section">
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer> */}
            <Link to="/workbreak">
              <Button variant="outline-primary" className="break-btn">
                <PauseFill />
              </Button>
            </Link>
          {/* </Card.Footer> */}
        </Card>
        <br />
        <Card>
          <House className="card-icons" />
          <Card.Body>
            <Card.Title>
              <large className="text-muted">Home BREAK</large>
            </Card.Title>
            <Card.Text>
              {/* This card has supporting text below as a natural lead-in to
              additional content. */}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer> */}
            <Link to="/homebreak">
              <Button variant="outline-danger" className="break-btn">
                <PauseFill />
              </Button>
            </Link>
          {/* </Card.Footer> */}
        </Card>
        <Card>
          <CloudMinus className="card-icons" />
          <Card.Body>
            <Card.Title>
              <large className="text-muted">Play BREAK</large>
            </Card.Title>
            <Card.Text>
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action. */}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer> */}
            <Link to="/playbreak">
              <Button variant="outline-warning" className="break-btn">
                <PlayFill />
              </Button>
            </Link>
          {/* </Card.Footer> */}
        </Card>
      </CardGroup>
    );
  }
}
export default CardsForBlogs;
