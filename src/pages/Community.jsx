import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import quizImage from "../assets/img/noimg.jpg";
import gameImage from "../assets/img/noimg.jpg";
import tipsImage from "../assets/img/noimg.jpg";

const Community = () => {
  return (
    <Container>
      <Row className="justify-content-md-center animate__animated animate__slideInDown">
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={quizImage} />
            <Card.Body>
              <Card.Title>Take the Quiz</Card.Title>
              <Card.Text>
                Find out which pet suits you best by taking our fun quiz!
              </Card.Text>
              <Button variant="primary" href="/quiz">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={gameImage} />
            <Card.Body>
              <Card.Title>Play a Game</Card.Title>
              <Card.Text>
                Enjoy our interactive game and have fun with virtual pets!
              </Card.Text>
              <Button variant="primary" href="/game">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={tipsImage} />
            <Card.Body>
              <Card.Title>Pet Care Tips</Card.Title>
              <Card.Text>
                Learn useful tips and tricks to take care of your pet!
              </Card.Text>
              <Button variant="primary" href="/pet-care-tips">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h3 className="text-dark my-5 text-center">Read our forum</h3>
      </Row>
      <Row className="justify-content-md-center gap-5">
        <Card>
          <Card.Header as="h5">By Olivia Davis</Card.Header>
          <Row>
            <Col lg={1} className="d-flex justify-content-center p-4">
                <img src={quizImage} style={{ borderRadius: "50%", width: "100%", objectFit: "cover" }} alt="" />
            </Col>
            <Col lg={11}>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Community;
