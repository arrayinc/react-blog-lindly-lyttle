import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";
import ContactModal from "../components/contact-form-modal";

export class ContactForm extends Component {
  render() {
    return (
      <>
        <div className="contact-background">
          <h1 className="contact-form-title">We'd love to hear from you <Envelope /></h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Enter name" />
              <br />
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="contact-text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
              <br />
              <Form.Control type="message" placeholder="Your message" as="textarea" rows={3} />
            </Form.Group>
            <ContactModal className="contact-modal" />
          </Form>
        </div>
      </>
    );
  }
}
export default ContactForm;

