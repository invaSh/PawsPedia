import React from "react";
import { Container, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import jazz from "../assets/audio/jazz.wav";
import griselda from "../assets/audio/griselda.mp3";
import dog2 from "../assets/animations/Dog2.json"
import cat3 from "../assets/animations/Cat3.json"
import Lottie from "lottie-react";

const AnimalSounds = () => {
  return (
    <Container>
      <Row className="text-dark text-center mt-5 justify-content-center animate__animated animate__fadeInDown">
        <Col lg={4}>
          <h3>Meet Jazz the Dog!</h3>
          <audio controls>
            <source src={jazz} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <Lottie animationData={dog2} style={{ width: "60%", margin: "0 auto" }}/>
        </Col>
        <Col lg={4}>
          <h3>Meet Griselda the Cat!</h3>
          <audio controls>
            <source src={griselda} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <Lottie animationData={cat3} style={{ width: "40%", margin: "0 auto" }}/>
        </Col>
      </Row>
    </Container>
  );
};
export default AnimalSounds;
