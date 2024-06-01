import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Carousel,
} from "react-bootstrap";
import "animate.css";

const CarouselItem = ({ images }) => {
  return (
    <Row className="d-flex justify-content-center" style={{ marginBottom: "10rem"}}>
      <Col md={7}>
        <Carousel
          indicators={true}
          prevIcon={
            <span className="carousel-control-prev-icon bg-primary rounded-3" />
          }
          nextIcon={
            <span className="carousel-control-next-icon bg-primary rounded-3" />
          }
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Card>
                <Card.Body className="m-3">
                  <Row>
                    <Col
                      lg={4}
                      className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                    >
                      <img
                        src={image.img}
                        className="rounded-circle img-fluid shadow-1"
                        alt={image.title}
                        width="200"
                        height="200"
                      />
                    </Col>
                    <Col lg={8} className="text-dark">
                      <h5 className="fw-bold lead mb-2">
                        <strong>{image.user}</strong>
                      </h5>
                      <p className="fw-bold">{image.title}</p>
                      <p className="text-muted mb-4">
                        {image.subtitle}
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};
export default CarouselItem;
