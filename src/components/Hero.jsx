import React from "react";
import elipse1 from "../assets/img/Ellipse 1.png";
import elipse2 from "../assets/img/Ellipse 2.png";
import elipse3 from "../assets/img/Ellipse 3.png";
import heroDog from "../assets/img/hero dog.png";
import Button from "react-bootstrap/Button";
import paw from "../assets/img/paw print.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="container">
        <div className="row position-relative">
          <div
            className="col-lg-6"
            style={{
              marginTop: "10rem",
            }}
          >
            <img src={elipse2} alt="" id="elipse2" />
            <img src={elipse1} alt="" id="elipse1" />
            <div
              className="container text-dark d-flex flex-column gap-4"
              id="heroText"
            >
              <h5 className="animate__animated animate__fadeInDown">
                Find Your Furry Companion Today With
              </h5>
              <h1 className="animate__animated animate__fadeInDown">
                PAWSPEDIA
              </h1>
              <p className="animate__animated animate__fadeInDown">
                Our mission is to connect compassionate individuals like you
                with pets in need of love and care. Whether you're searching for
                a loyal canine companion, a playful feline friend, or a cuddly
                critter to complete your family, you're in the right place.
                Every pet has a unique story, and we're here to help you find
                the perfect match for your lifestyle and personality.
              </p>
            </div>
            <Button
              variant="dark"
              className="mt-3 ms-1 me-5 animate__animated animate__fadeInUp"
            >
              Get Started
            </Button>
            <div className="pawContainer">
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw1"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw2"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw3"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw4"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw5"
              />
            </div>
            <div className="pawContainer2">
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw6"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw7"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw8"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw9"
              />
              <img
                src={paw}
                alt=""
                className="paw animate__animated animate__fadeIn"
                id="paw10"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <img src={elipse3} alt="" id="elipse3" />
            <img
              src={heroDog}
              alt=""
              id="heroDog"
              className=" animate__animated animate__fadeInDown"
              style={{
                zIndex: "-1"
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
