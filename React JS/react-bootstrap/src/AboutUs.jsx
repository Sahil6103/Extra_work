import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="row -flex flex-row justify-content-evenly align-items-center gap-4">
          <Col
            sm={12}
            md={6}
            className="text-white d-flex flex-column justify-content-center align-content-center align-align-items-md-start gap-4"
          >
            <h1 className="display-5 fw-normal">About Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              deserunt modi corrupti quibusdam, eum rem? A beatae qui aperiam
              vel, distinctio consequatur accusantium explicabo ex debitis alias
              temporibus iusto est voluptatum. Placeat quaerat repudiandae
              blanditiis, iusto odit explicabo dignissimos ipsam laudantium a
              voluptas vitae, impedit, ad amet veniam quasi magni! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Odio harum debitis
              tempora obcaecati voluptatum cupiditate ipsa id asperiores sit
              nam?
            </p>
            <div className="align-self-start">
              <Button className="btn bg-info fw-bold text-white">
                Learn More
              </Button>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <img
              src="src/assets/img/flat-design-cms-concept-illustrated_23-2148796510-removebg-preview.png"
              alt=""
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
