import React from "react";
import elipse2 from "../assets/img/Ellipse 2.png";
import elipse1 from "../assets/img/Ellipse 1.png";
import useIntersectionObserver from "../js/useIntersectionObserver";


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
        />
      </div>
      <section
        ref={elementRef}
        className="container hidden w-100 text-dark p-5 infoContainer"
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
            <ul className="mt-3">
              <li>
                Rescue: We work tirelessly to rescue pets from shelters, abusive
                situations, and neglect, providing them with the care and
                attention they need to thrive.
              </li>
            </ul>
          </div>
          <div className="col-lg-5 position-relative">
            <ul>
              <li>
                Rehome: Through our comprehensive adoption process, we match
                each pet with a loving, responsible forever home, ensuring a
                seamless transition and a lifetime of happiness.
              </li>
              <li>
                Rebuild: We are committed to providing ongoing support and
                resources to both pets and adopters, empowering them to build
                strong, fulfilling relationships and enriching lives.
              </li>
            </ul>
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
            zIndex: "-1"
          }}
        />
      </div>
    </>
  );
};

/**/

export default Info;
