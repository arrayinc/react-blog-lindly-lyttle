import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import BlogPhotoOne from "./workbreak.jpg";
import BlogPhotoTwo from "./homebreak.jpg";
import BlogPhotoThree from "./playbreak.jpg";

export class CardsForBlogs extends Component {
  render() {
    return (
      <CardGroup className="cards-for-blogs">
        <Card>
          <Card.Img variant="top" src={BlogPhotoOne} className="blog-photos" />
          <Card.Body>
            <Card.Title>
              <small className="text-muted">Work BREAK</small>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button href="./workbreakpage">
              <small className="work-break-btn">Pause Work</small>
            </button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={BlogPhotoTwo} className="blog-photos" />
          <Card.Body>
            <Card.Title>
              <small className="text-muted">Home BREAK</small>
            </Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button>
              <small className="home-break-btn">Pause Home</small>
            </button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={BlogPhotoThree}
            className="blog-photos"
          />
          <Card.Body>
            <Card.Title>
              <small className="text-muted">Play BREAK</small>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button>
              <small className="play-break-btn">Let's Play</small>
            </button>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}
