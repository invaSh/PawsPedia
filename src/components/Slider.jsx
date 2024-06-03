import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import useIntersectionObserver from "../js/useIntersectionObserver";

const slides = [
  {
    title: "Join Our Pet-Loving Community",
    subtitle:
      "Welcome to Our Pet-Loving Community! Discover the fulfillment of adopting, nurturing, and connecting with pets. Share in the joy of building loving relationships that enrich both human and animal lives. Together, let's make a positive impact and create lasting memories with our beloved companions.",
    img: "https://diamondpet.storage.googleapis.com/wp-content/uploads/2023/02/06151608/dog-giving-paw-042418.jpg",
  },
  {
    title: "Adoption Success Stories",
    subtitle:
      "Explore captivating narratives unveiling the transformative power of rescued pets. Witness firsthand the profound impact these furry companions have had, igniting hope, joy, and boundless love in the lives of their adoptive families. Join us in celebrating the remarkable tales of resilience, compassion, and unwavering companionship that inspire us all.",
    img: "https://www.wagr.ai/cdn/shop/articles/how-to-adopt-a-stray-dog-an-easy-step-by-step-guide-552644.jpg?v=1687039533",
  },
  {
    title: "Check Out Our Upcoming Events!",
    subtitle:
      "Exciting Gatherings Await: Mark your calendar for delightful moments filled with furry friends, laughter, and community connections. Dive into a world of fun-filled activities, heartwarming encounters, and cherished memories waiting to be made. Come join the adventure!",
    img: "https://dogpsychology101.com/wp-content/uploads/2018/01/funny-dogs_2.jpg",
  },
  {
    title: "Make a Difference Today",
    subtitle:
      "Seize the Opportunity: Volunteer your time, contribute donations, or open your heart and home to adoption. Every gesture, big or small, makes a profound impact in the lives of pets awaiting love and care. Join us in shaping brighter futures together.",
    img: "https://www.littlewhitedogco.com/wp-content/uploads/2019/10/volunteer-1200x630.jpg",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        padding: "0",
      }}
      className="hero-slider"
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} className="carousel-item">
          <img
            className="d-block w-100"
            src={slide.img}
            alt={slide.title}
            style={{
              maxHeight: "700px",
              minHeight: "225px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3
              ref={useIntersectionObserver("animate__fadeInDown")}
              style={{ animationDelay: ".5s" }}
              className="hidden"
            >
              {slide.title}
            </h3>
            <p
              ref={useIntersectionObserver("animate__fadeInDown")}
              style={{ animationDelay: "1s"}}
              className="hidden"
            >
              {slide.subtitle}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
