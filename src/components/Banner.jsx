import React from "react";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import useIntersectionObserver from "../js/useIntersectionObserver";


const Banner = () => {

  const ref = useIntersectionObserver("animate__zoomIn");

  return (
    <section 
    className="row bg-white banner justify-content-center text-center text-dark hidden" 
    style={{ 
      marginBottom: "200px", 
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      }}
      ref={ref}
      >
        <h2 className="mt-5">Our Services</h2>
      <div className="col-lg-3">
        <img src={icon2} alt="" />
        <h3>Foster Care Program</h3>
        <p>Provide temporary homes for pets awaiting adoption. Our foster care program allows animals to thrive in a home environment while we search for their forever families. Fostering is a rewarding way to help pets in need and prepare them for successful adoption.</p>
      </div>
      <div className="col-lg-3 ">
        <img src={icon1} alt="" />
        <h3>Behavioral Training</h3>
        <p>Offer professional training services to help pets adjust to their new homes. Our certified trainers work with adopters to address behavioral issues, teach essential commands, and ensure a smooth transition for both the pet and their new family.</p>
      </div>
      <div className="col-lg-3">
        <img src={icon3} alt="" />
        <h3>Veterinary Care Assistance</h3>
        <p>Ensure every pet is healthy and ready for adoption. We provide initial veterinary care, including vaccinations, spaying/neutering, and microchipping. Additionally, we offer resources and partnerships with local vets to support ongoing health care for adopted pets.</p>
      </div>
    </section>
  );
};

export default Banner;
