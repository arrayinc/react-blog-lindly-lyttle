import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

export class HomepageCards extends Component {
  render() {
    return (
      <>
        <CardDeck className="card-deck">
          <Card
            border="warning"
            className="card-image"
            style={{
              width: "10rem",
            }}
          >
            <Card.Body className="work-card-body">
              {/* <Card.Title className="homepage-card-title">
                  Work Break
                </Card.Title> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
            <Link to="/workbreak">
              <Card.Footer className="work-card-footer">
                Work Break <PauseFill />
              </Card.Footer>
            </Link>
          </Card>
          <br />

          <Card border="success" style={{ width: "10rem" }}>
            <Card.Body className="home-card-body">
              {/* <Card.Title className="homepage-card-title">
                  Home Break
                </Card.Title> */}
              {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
            </Card.Body>
            <Link to="/homebreak">
              <Card.Footer className="home-card-footer">
                Home Break <PauseFill />
              </Card.Footer>
            </Link>
          </Card>
          <br />

          <Card border="primary" style={{ width: "10rem" }}>
            <Card.Body className="play-card-body">
              {/* <Card.Title className="homepage-card-title">
                  Play Break
                </Card.Title> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
            <Link to="/playbreak">
              <Card.Footer className="play-card-footer">
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
