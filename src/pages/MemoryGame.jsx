import React from 'react'
import MemoryMatchingGame from "../games/MemoryMatchingGame";
import { Row, Container, Col } from 'react-bootstrap';

const MemoryGame = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={8}>
      <MemoryMatchingGame />
      </Col>
    </Row>
  )
}

export default MemoryGame
