import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  PauseFill,
  PlayFill,
  CalendarEvent,
  House,
  CloudMinus,
} from "react-bootstrap-icons";

export class HomePageList extends Component {
  render() {
    return (
      <div>
        <ListGroup className="list-group">
          <ListGroup.Item variant="primary">Primary</ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            Secondary
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            Success
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            Danger
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            Warning
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Info
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Light
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dark
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
export default HomePageList;
