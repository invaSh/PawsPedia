import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import bgImg from "../assets/img/Rectangle 1.png";


const VolunteerCallToAction = () => {
  return (
      <Container 
      className="mt-5 text-dark p-5 volunteer" 
      style={{
        marginBottom: "200px"
      }}
      >
        <h2>Join Our Volunteer Team</h2>
        <p>
          Make a difference in the lives of pets. Sign up to learn more about
          volunteer opportunities and how you can help.
        </p>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Sign Up to Volunteer
          </Button>
        </Form>
      </Container>
  );
};

export default VolunteerCallToAction;
