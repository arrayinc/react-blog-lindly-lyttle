import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import BlogPhotoOne from "../images/homepage/workbreak.jpg";
import BlogPhotoTwo from "../images/homepage/homebreak.jpg";
import BlogPhotoThree from "../images/homepage/playbreak.jpg";
import { Link } from "react-router-dom";

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
            <Link to="/workbreak">
              <button>
                <small className="work-break-btn">Pause Work</small>
              </button>
            </Link>
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
            <Link to="/homebreak">
              <button>
                <small className="home-break-btn">Pause Home</small>
              </button>
            </Link>
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
            <Link to="/playbreak">
              <button>
                <small className="play-break-btn">Let's Play</small>
              </button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}
