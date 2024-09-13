import { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";

export function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="py-4 d-flex justify-content-center">
        <Button variant="primary" onClick={handleShow}>
          Message for you
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hello Visitor</Modal.Title>
          </Modal.Header>
          <Modal.Body>I hope you enjoyed it!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}
