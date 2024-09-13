import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <Container className="py-4">
          <Row className="text-white d-flex">
            <Col sm={12} md={3}>
              <div className="logo h3">Logo</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium repudiandae, soluta facilis, unde laborum sint fuga
                obcaecati, enim possimus
              </p>
            </Col>
            <Col sm={12} md={3}>
              <div className="links d-flex flex-column justify-content-center align-items-start">
                <span>Home</span>
                <span>About Us</span>
                <span>Projects</span>
                <span>Services</span>
                <span>Contact us</span>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="links d-flex flex-column justify-content-center align-items-start">
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="icons d-flex justify-content-start align-items-start gap-4">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-linkedin"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
