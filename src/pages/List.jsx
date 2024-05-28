import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stepper, Step } from "react-form-stepper";

function PetAdoptionForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleContinue = (index) => {
    setActiveStep(index);
  };

  const steps = [
    {
      label: "Important Pre-Information",
      step: "1",
      content: (
        <Container className="mt-5 mb-3 animate__animated animate__fadeInDown">
          <Card className="p-4 border-0 rounded-5 shadow-sm">
            <Card.Body>
              <h2 className="mb-4 text-dark">Important Pre-Information</h2>
              <p>
                Thank you for considering listing a pet for adoption. Please
                ensure that you provide all the necessary information to help
                potential adopters make an informed decision. Here are a few
                guidelines to keep in mind:
              </p>
              <ul>
                <li>
                  Provide accurate and detailed information about the pet.
                </li>
                <li>Include clear and recent photos of the pet.</li>
                <li>
                  Mention any special needs or requirements the pet may have.
                </li>
                <li>Ensure your contact details are correct and up-to-date.</li>
              </ul>
              <h3 className="mt-4">Before you start…</h3>
              <p>
                Please make sure you’ve read and agree to these points before
                you create a listing:
              </p>
              <ul>
                <li>
                  You won’t get paid for your pet but it is free to list them
                  with our Charity.
                </li>
                <li>
                  We can't help with emergency rehoming. You will need to be
                  able to keep your pet for at least 4-6 weeks minimum before
                  rehoming (more during peak holiday times when people are often
                  away).
                </li>
                <li>
                  All listings are subject to approval by the PetRehomer team.
                  Before we post your listing on the site, we’ll check your
                  pet’s profile thoroughly. If we have any questions, we will
                  give you a call.
                </li>
                <li>
                  If your listing does not provide a detailed description of
                  your pet which must include good quality photos, we will
                  REJECT the listing and you will need to resubmit a new
                  listing.
                </li>
              </ul>
              <Button
                variant="primary"
                onClick={() => handleContinue(1)}
                className="mt-3"
              >
                Continue
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ),
    },
    {
      label: "Before You List a Pet",
      step: "2",
      content: (
        <Container className="mt-5 mb-3">
          <Card className="p-4 border-0 rounded-5 shadow-sm">
            <Card.Body className="animate__animated animate__fadeIn"> 
              <h2 className="mb-4 text-dark">
                Before You List a Pet for Adoption
              </h2>
              <p>
                Are you rehoming a dog, cat, or other pet? Are you rehoming a
                bonded pair? If you are listing a bonded pair, please select the
                drop-down options below relating to your youngest pet and in the
                description, provide full details of both pets.
              </p>
              <Form.Group className="mb-3" controlId="formPetType">
                <Form.Check type="radio" name="petType" label="Dog" id="dog" />
                <Form.Check type="radio" name="petType" label="Cat" id="cat" />
                <Form.Check
                  type="radio"
                  name="petType"
                  label="Other Pet"
                  id="otherPet"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBondedPair">
                <Form.Check
                  type="checkbox"
                  label="Rehoming a bonded pair"
                  id="bondedPair"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSpayedNeutered">
                <Form.Label>Is your pet spayed or neutered?</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRehomeReason">
                <Form.Label>Why do you need to rehome your pet?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formKeepPetDuration">
                <Form.Label>
                  How long are you able to keep your pet while we help find a
                  suitable new home?
                </Form.Label>
                <Form.Control type="text" placeholder="Enter duration" />
              </Form.Group>
              <Button
                variant="secondary me-2"
                onClick={() => handleContinue(0)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                onClick={() => handleContinue(2)}
                className="me-3"
              >
                Continue
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ),
    },
    {
      label: "List a Pet",
      step: "3",
      content: (
        <Container className="mt-5 mb-5 p-5 card rounded-5">
          <h2 className="mb-4 text-dark animate__animated animate__fadeIn">List a Pet for Adoption</h2>
          <Form className="animate__animated animate__fadeIn"> 
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPetName">
                  <Form.Label>Pet Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter pet's name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPetType">
                  <Form.Label>Pet Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter pet type (e.g., Dog, Cat)"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPetBreed">
                  <Form.Label>Breed</Form.Label>
                  <Form.Control type="text" placeholder="Enter breed" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPetAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter pet's age" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPetGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select>
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPetSize">
                  <Form.Label>Size</Form.Label>
                  <Form.Select>
                    <option>Select size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formPetDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter a description of the pet"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formContactName">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formContactEmail">
                  <Form.Label>Contact Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formContactPhone">
                  <Form.Label>Contact Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location (City, State)"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4" controlId="formImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Row className="justify-content-center gap-3">
              <Button
                variant="secondary"
                className="col-lg-2 "
                onClick={() => handleContinue(1)}
              >
                Back
              </Button>
              <Button variant="primary" className="col-lg-2 " type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Container>
      ),
    },
  ];

  return (
    <>
      <Container className="card rounded-5 animate__animated animate__fadeInDown">
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={step.label}
              label={step.label}
              text={step.text}
              onClick={() => handleContinue(index)}
              style={{
                fontSize: "30px",
              }}
              className=""
            />
          ))}
        </Stepper>
      </Container>

      {steps.map((step, index) => (
        <div
          key={index}
          style={{ display: activeStep === index ? "block" : "none" }}
        >
          {step.content}
        </div>
      ))}
    </>
  );
}

export default PetAdoptionForm;
