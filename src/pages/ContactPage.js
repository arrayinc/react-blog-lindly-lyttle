/* Imported React */
import React from 'react';
/* Imported Components from Bootstrap */
import { Form } from "react-bootstrap";
/* Imported Icons from Bootstrap */
import { Envelope } from "react-bootstrap-icons";
/* Imported Contact Modal Popup from Local Components*/
import ContactModal from "../components/contact-form-modal";

/* Contact Form to Fill Out on Contact Page */
function ContactForm() {
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
export default ContactForm;

