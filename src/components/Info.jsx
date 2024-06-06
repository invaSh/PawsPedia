import React from "react";
import elipse2 from "../assets/img/Ellipse 2.png";
import elipse1 from "../assets/img/Ellipse 1.png";
import arrow from "../assets/img/arrow.png";
import arrow2 from "../assets/img/arrow2.png";
import useIntersectionObserver from "../js/useIntersectionObserver";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Cat1 from "../assets/animations/Cat1.json";
import CatOwner from "../assets/animations/CatOwner.json";
import Health from "../assets/animations/Health.json";
import Lottie from "lottie-react";

const Info = () => {
  const elementRef = useIntersectionObserver("animate__zoomIn");
  return (
    <>
      <div className="position-relative">
        <img
          src={elipse2}
          alt=""
          style={{
            position: "absolute",
            width: "700px",
            top: "700px",
            left: "-300px",
          }}
          id="elipse5"
        />
      </div>
      <section
        ref={useIntersectionObserver("animate__zoomIn")}
        className="container w-100 text-dark p-5 infoContainer fs-5 hidden"
      >

        <h6 className="text-muted text-center">
          Our Mission: Rescuing, Rehoming, and Rebuilding Lives
        </h6>
        <h3 className="text-center my-4">WHO WE ARE</h3>
        <div className="row gap-3 justify-content-center">
          <div className="col-lg-5">
            At PawsPedia, our mission is clear: to rescue, rehome, and rebuild
            the lives of pets in need. We are dedicated to providing a safe
            haven for animals facing uncertain futures, offering them a second
            chance at happiness and security. Our objectives are
            straightforward:
          </div>
        </div>
      </section>
      <div className="position-relative">
        <img
          src={elipse1}
          alt=""
          style={{
            position: "absolute",
            width: "900px",
            top: "-300px",
            right: "-500px",
            zIndex: "-1",
          }}id="elipse4"
        />
      </div>
      <Container style={{ marginTop: "300px", position: "relative" }}>
        <Row className="text-dark align-items-center fs-5 text-center" style={{ marginBottom: "200px" }} >
          <Col lg={6} ref={useIntersectionObserver("animate__zoomIn")} className="hidden" style={{ animationDuration: "2s"}}>
            <h2>Rehome</h2>
            <p>
              Rehoming is a vital service provided by pet adoption centers,
              ensuring rescued animals find loving, permanent homes. The process
              involves carefully matching animals with suitable adopters based
              on lifestyle, environment, and compatibility. Potential adopters
              go through an application process, including interviews and home
              visits, to ensure the best fit. <br /> <br /> Adoption counselors
              provide guidance and support to new pet owners, helping them
              integrate their new family member smoothly. Rehoming not only
              gives animals a fresh start but also brings joy and companionship
              to their new families, creating lasting bonds and promoting
              responsible pet ownership.
            </p>
          </Col>
          <Col lg={6} ref={useIntersectionObserver("animate__slideInLeft")} style={{ animationDuration: "2s"}}>
            <Lottie animationData={CatOwner} />
          </Col>
        </Row>
        <div style={{ position: "absolute", top: "425px" }} className="arrow hidden" ref={useIntersectionObserver("animate__fadeIn")}  >
        </div>
        <Row className="text-dark align-items-center fs-5 text-center" style={{ marginBottom: "200px" }}>
          <Col lg={6} ref={useIntersectionObserver("animate__slideInRight")} style={{ animationDuration: "2s"}}>
            <Lottie animationData={Cat1} />
          </Col>
          <Col lg={6} ref={useIntersectionObserver("animate__zoomIn")} className="hidden" style={{ animationDuration: "2s"}}>
            <h2>Rescue</h2>
            <p>
              Rescue operations at pet adoption centers are critical for saving
              animals from neglect, abuse, abandonment, and dangerous
              situations. These centers often respond to emergency calls,
              collaborate with local authorities, and conduct investigations to
              identify animals in need. <br />
              <br /> Upon rescue, the animals are brought to the center, where
              they receive immediate medical attention, nourishment, and a safe
              environment. The dedicated staff and volunteers work tirelessly to
              provide comfort and care, helping the animals to recover
              physically and emotionally. These rescue efforts not only save
              lives but also give animals a second chance at finding a loving
              and permanent home.
            </p>
          </Col>
        </Row>
        <div style={{ position: "absolute", top: "1150px",right: "-500px" }} className="arrow hidden" ref={useIntersectionObserver("animate__fadeIn")}  >
        </div>
        <Row className="text-dark align-items-center justify-content-between  fs-5 text-center">
          <Col lg={6} ref={elementRef} className="hidden" style={{ animationDuration: "2s"}}>
            <h2>Rehabilitate</h2>
            <p>
              Rehabilitation is a crucial aspect of pet adoption centers,
              focusing on the physical and emotional recovery of rescued
              animals. Upon arrival, each animal undergoes a thorough health
              assessment, receiving necessary medical treatments and
              vaccinations. Behavioral training is provided to address any
              trauma or anxiety, helping them adapt to human interaction and
              social environments. <br /> <br /> The rehabilitation process often includes
              proper nutrition, exercise, and enrichment activities to ensure
              holistic recovery. Skilled staff and volunteers work patiently to
              rebuild the animals' trust and confidence, preparing them for
              adoption. This comprehensive care transforms their lives, making
              them healthy, happy, and ready for a new home.
            </p>
          </Col>
          <Col lg={6} className="d-flex justify-content-center hidden" ref={useIntersectionObserver("animate__slideInLeft")} style={{ animationDuration: "2s"}}>
            <Lottie animationData={Health} style={{ width : "80%"}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

/**/

export default Info;
