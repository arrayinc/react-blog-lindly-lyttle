import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <h1 className="contact-form-title">Send us a message</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="name" placeholder="Enter name" />
            <br />
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
            <br />
            <Form.Control type="message" placeholder="Your message" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-secondary" type="submit">
            Send
  </Button>
        </Form>
      </div>
    );
  }
}
export default ContactForm;

