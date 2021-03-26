import React from 'react';
// import WorkBreakPhoto from "../images/WorkBreakPage/workbreakcover.jpg";
// import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { JumbotronForBlogs } from '../components/JumbotronBlogPages';
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

function WorkBreak() {
  return (
    <>
      <JumbotronForBlogs />
      <h1>Work Break Blog Title</h1>
      <h6>Authored By: | 3 min read | <Facebook /> {"  "} <Twitter /> {"  "} <Instagram /> {"  "} </h6>
      <div className="blog-container"> </div>
      <div>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    </>
  );
}
export default WorkBreak;