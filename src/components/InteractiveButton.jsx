import React, { useState } from "react";
import { Container, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import AnimalSounds from "../components/AnimalSounds";

const InteractiveButton = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Row className="justify-content-center mb-5">
        <Col lg={4} className="d-flex justify-content-center">
          <Button className="circular-btn" onClick={handleToggle}><a>Click for a surprise!</a></Button>
        </Col>
      </Row>
      <Row className={`animal-sounds-container mb-5 ${show ? 'show' : ''}`}>
        <Col lg={12}>
          <AnimalSounds />
        </Col>
      </Row>
    </>
  );
};

export default InteractiveButton;
