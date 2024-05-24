import React, { useState } from "react";
import "animate.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const animateSlide = (outAnimation, inAnimation, updateIndex) => {
    setAnimationClass(`animate__animated ${outAnimation}`);
    setTimeout(() => {
      updateIndex();
      setAnimationClass(`animate__animated ${inAnimation}`);
      setTimeout(() => {
        setAnimationClass("");
      }, 300);
    }, 300); 
  };

  const handleNext = () => {
    animateSlide("animate__slideOutLeft", "animate__slideInRight", () =>
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      )
    );
  };

  const handlePrevious = () => {
    animateSlide("animate__slideOutRight", "animate__slideInLeft", () =>
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      )
    );
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      const outAnimation = index > currentIndex ? "animate__slideOutLeft" : "animate__slideOutRight";
      const inAnimation = index > currentIndex ? "animate__slideInRight" : "animate__slideInLeft";
      animateSlide(outAnimation, inAnimation, () => setCurrentIndex(index));
    }
  };

  return (
    <section className="row my-5">
      <div className="carousel d-flex flex-column align-items-center">
        <div className={`testimonial-content card text-dark py-3 px-5 rounded-3 ${animationClass}`}>
          <div className="card-body row align-items-center justify-content-center">
            <div className="col-lg-4 text-center">
              <img key={currentIndex} src={images[currentIndex].img} alt={images[currentIndex].title} />
            </div>
            <div className="col-lg-8 mt-sm-3">
              <h4>{images[currentIndex].title}</h4>
              <p>{images[currentIndex].subtitle}</p>
              <p>
                <strong>- {images[currentIndex].user}</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="slide_direction">
          <div className="left" onClick={handlePrevious}>
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="right" onClick={handleNext}>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <div className="indicator d-flex justify-content-center">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
