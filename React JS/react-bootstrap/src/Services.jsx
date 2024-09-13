import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import { Pencil } from "react-bootstrap-icons";
// import "bootstrap-icons/font/bootstrap-icons.css";

export const Services = () => {
  return (
    <>
      <Container className="services py-5 d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="content">
          <h1 className="display-5 fw-normal text-white text-center">
            Our Services
          </h1>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Row className="d-flex justify-content-evenly align-items-center gap-4 gap-md-0">
          <Col sm={12} md={3} className="">
            <Card className="card px-3 py-4 text-center text-white d-flex flex-column justify-content-center align-items-center gap-3 border-3 rounded-4 bg-transparent border-white">
              <span className="display-3">
                <i className="bi bi-pc-display-horizontal"></i>
              </span>
              <Card.Body>
                <Card.Title className="text-center">Design</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, harum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} className="">
            <Card className="card px-3 py-4 text-center text-white d-flex flex-column justify-content-center align-items-center gap-3 border-3 rounded-4 bg-transparent border-white">
              <span className="display-3">
                <i className="bi bi-pc-display-horizontal"></i>
              </span>
              <Card.Body>
                <Card.Title className="text-center">Design</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, harum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} className="">
            <Card className="card px-3 py-4 text-center text-white d-flex flex-column justify-content-center align-items-center gap-3 border-3 rounded-4 bg-transparent border-white">
              <span className="display-3">
                <i className="bi bi-pc-display-horizontal"></i>
              </span>
              <Card.Body>
                <Card.Title className="text-center">Design</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, harum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
