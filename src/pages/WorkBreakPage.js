import React from 'react';
import { Card, Badge, Alert } from "react-bootstrap";
import BackgroundPhoto from "../images/WorkBreakPage/workbreakblog2.jpg";
import { Facebook, Twitter, Instagram, FilePersonFill, Calendar } from "react-bootstrap-icons";

function WorkBreak() {
  return (
    <>
      <Alert className="blog-page-alert" variant='secondary'>
        Work BREAK&nbsp; |&nbsp;&nbsp;Morning Ritual&nbsp;&nbsp;&nbsp;&nbsp;Meditation&nbsp;&nbsp;&nbsp;&nbsp;Affirmations&nbsp;&nbsp;&nbsp;&nbsp;Journaling&nbsp;&nbsp;&nbsp;&nbsp;Healthy recipes&nbsp;&nbsp;&nbsp;&nbsp;Well-being at work
  </Alert>
      <h1>Work Break Blog Title</h1>
      <br />
      <h5 className="blog-author">Authored By  <Badge pill variant="primary">Billy Bob</Badge>  <FilePersonFill /></h5>
      <br /><h6><Calendar /> Sun Mar 28, 2021</h6><h6> 3 min read | <Facebook /> <Twitter /> <Instagram /></h6>
      <img className="work-break-photo" src={BackgroundPhoto} alt="First slide" />
      <div>
        <Card className="cards-in-blogs" border="primary" style={{ width: '18rem' }}>
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
        <Card className="cards-in-blogs" border="secondary" style={{ width: '18rem' }}>
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
        <Card className="cards-in-blogs" border="success" style={{ width: '18rem' }}>
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
        <Card className="cards-in-blogs" border="info" style={{ width: '18rem' }}>
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