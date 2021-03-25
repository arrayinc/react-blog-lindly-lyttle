import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import BlogPhotoOne from "./forest.jpg";

export class CardsForBlogs extends Component {
  render() {
    return (
      <CardGroup className="cards-for-blogs">
        <Card>
          <Card.Img variant="top" src={BlogPhotoOne} />
          <Card.Body>
            <Card.Title>
              <small className="text-muted">Hello World</small>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">work BREAK</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>
              <small className="text-muted">Hello World</small>
            </Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">home BREAK</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>
              <small className="text-muted">Hello World</small>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">play BREAK</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}
