import React from "react";
import { Container, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import quizBg from "../assets/img/quizBg2.png";
import cat2 from "../assets/animations/Cat2.json";
import Lottie from "lottie-react";

const lotties = [
  `<div
  style={{
    width: "200px",
    transform: "rotate(180deg)",
    position: "absolute",
    top: "0",
  }}
>
  <Lottie animationData={cat2} />
</div>`,
];

const QuizCard = () => {
  return (
    <Card
      className="text-dark p-5 rounded-3"
      style={{ backgroundImage: `url(${quizBg})`, position: "relative" }}
    >
      <Row className="align-items-center justify-content-center mt-3 text-center">
        <Col lg={6}>
          <h3
            className="p-5 animate__animated animate__fadeInDown"
            style={{ animationDelay: "0.01s" }}
          >
            How much time can you dedicate to a pet on a scale of 1 to 5?
          </h3>
        </Col>
        <Col lg={6} className="d-flex flex-column px-5 gap-4">
          <span className="animate__animated animate__fadeInRight">
            <input
              type="button"
              value="Extensive Time"
              className="btnAnimation p-lg-3 py-3"
              style={{ backgroundColor: "#d0cfe5" }}
            />
          </span>
          <span
            className="animate__animated animate__fadeInRight"
            style={{ animationDelay: "0.2s" }}
          >
            <input
              type="button"
              value="Ample Time"
              className="btnAnimation p-lg-3 py-3"
              style={{ backgroundColor: "#f3d6e5" }}
            />
          </span>
          <span
            className="animate__animated animate__fadeInRight"
            style={{ animationDelay: "0.4s" }}
          >
            <input
              type="button"
              value="Average Time"
              className="btnAnimation p-lg-3 py-3"
              style={{ backgroundColor: "#b1c9e5" }}
            />
          </span>
          <span
            className=" animate__animated animate__fadeInRight"
            style={{ animationDelay: "0.6s" }}
          >
            <input
              type="button"
              value="Moderate Time"
              className="btnAnimation p-lg-3 py-3"
              style={{ backgroundColor: "#cfe8df" }}
            />
          </span>
          <span
            className="animate__animated animate__fadeInRight"
            style={{ animationDelay: "0.8s" }}
          >
            <input
              type="button"
              value="Limited Time"
              className="btnAnimation p-lg-3 py-3"
              style={{ backgroundColor: "#DBBECF" }}
            />
          </span>
        </Col>
        <Col lg={3} className="mt-5">
          <span
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <input
              type="button"
              value="Next"
              className="btnAnimation p-2 border-1"
              style={{
                backgroundColor: "#DCEAEC",
                width: "50%",
                fontSize: "1.2rem",
              }}
            />
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default QuizCard;
