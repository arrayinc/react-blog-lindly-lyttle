import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Heart, Mailbox, HandThumbsUp } from "react-bootstrap-icons";

/* Modal on Contact Page */
function ContactModal() {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={() => handleShow()}>
        Send
      </Button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Mailbox /> <Heart />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Signed, sealed, delivered. We will be in touch soon!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <HandThumbsUp />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ContactModal;
