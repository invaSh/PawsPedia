import React, { useState } from "react";
import noImg from "../assets/img/noimg.jpg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Lottie from "lottie-react";
import DogOwner from "../assets/animations/DogOwner.json";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import pets from "../assets/data/dogs.json";
import useIntersectionObserver from "../js/useIntersectionObserver";
import Cards from "../components/Cards";

const Adopt = () => {
  const [counterOn, setCounterOn] = useState(false);
  const delayFactor = 0.2;
  return (
    <>
      <Row className="text-dark">
        <Col lg={6} className="d-flex flex-column justify-content-center p-5">
          <Container className="d-flex flex-column card gap-3 bg-white p-5 rounded-3 animate__animated animate__zoomIn hidden">
            <h1 className="text-dark">
              <strong>
                Time to{" "}
                <span
                  className="text-primary p-2 rounded-3"
                  style={{ backgroundColor: "rgb(118 202 193 / 17%)" }}
                >
                  find
                </span>
                your{" "}
                <span
                  className="text-primary p-2 rounded-3"
                  style={{ backgroundColor: "rgb(118 202 193 / 17%)" }}
                >
                  pet
                </span>
                !
              </strong>
            </h1>
            <h4 className="text-dark">
              Discover your perfect match among our diverse array of lovable
              animals waiting to find their forever homes. Begin your journey to
              unconditional love today.
            </h4>
            <Row>
              <Button className="me-3 col">Jump to pets</Button>
              <h5 className="col d-flex flex-column justify-content-center">
                <span>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </span>
                93% of searchers proved to have found their match
              </h5>
            </Row>
          </Container>
        </Col>
        <Col lg={6} className="p-relative d-flex justify-content-center">
          <Lottie
            animationData={DogOwner}
            style={{ width: "700px" }}
            className="animate__animated animate__slideInDown hidden"
          ></Lottie>
        </Col>
      </Row>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container-fluid bg-white py-5 d-flex flex-column justify-content-center">
          <h5 className="text-center mb-5" style={{ color: "#000" }}>
            The numbers speak for themselves
          </h5>
          <h1 className="text-center text-dark">
            The achievements of{" "}
            <span
              className="text-primary p-2 rounded-3"
              style={{ backgroundColor: "rgb(118 202 193 / 17%)" }}
            >
              PawsPedia
            </span>{" "}
            during 4+ years
          </h1>
          <Row
            style={{ margin: "5rem 0", color: "#000" }}
            className="text-center counter"
          >
            <Col lg={3}>
              <h1 className="mb-0">
                {counterOn && (
                  <CountUp start={200} end={3500} duration={3} delay={0} />
                )}
                +
              </h1>
              <h5 className="text-muted">pets rescued</h5>
            </Col>
            <Col lg={3}>
              <h1 className="mb-0">
                {counterOn && (
                  <CountUp start={0} end={93} duration={3} delay={0} />
                )}
                %
              </h1>
              <h5 className="text-muted">adpotion success rate</h5>
            </Col>
            <Col lg={3}>
              <h1 className="mb-0">
                {counterOn && (
                  <CountUp start={1000} end={12000} duration={3} delay={0} />
                )}
                +
              </h1>
              <h5 className="text-muted">volunteer hours contributed</h5>
            </Col>
            <Col lg={3}>
              <h1 className="mb-0">
                {counterOn && (
                  <CountUp start={100} end={1200} duration={3} delay={0} />
                )}
                +
              </h1>
              <h5 className="text-muted">pets recieved medical care</h5>
            </Col>
          </Row>
        </div>
      </ScrollTrigger>
      <section className="row p-5 gap-3 justify-content-center">
        {pets.map((pet, index) => (
          <div className="col-lg-3">
            <Cards
              key={index}
              img={pet.image}
              title={pet.name}
              desc={pet.description}
              delayFactor={index * delayFactor}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Adopt;
