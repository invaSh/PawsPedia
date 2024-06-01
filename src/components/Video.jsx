import React from "react";
import Vid from "../assets/video/video1.mp4";
import Thumbnail from "../assets/img/thumbnail.jpg";
import useIntersectionObserver from "../js/useIntersectionObserver";

const Video = () => {
  return (
    <div className="container-fluid bg-white hidden" ref={useIntersectionObserver("animate__zoomIn")}>
      <section
        className="row justify-content-center text-center align-items-center pt-5"
        style={{ margin: "170px 0" }}
        
      >
        <h1 className="text-dark">
          <i>This week's rescue</i>
        </h1>
        <div className="col-lg-6 p-5">
          <video
            style={{
              width: "90%",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              animationDelay: "0.5s",
            }}
            controls
            className="rounded-5"
          >
            <source src={Vid} type="video/mp4" />
          </video>
          <i>
            <p
              className="text-dark mt-3"
              style={{
                fontSize: "20px",
              }}
            >
              In this touching video, join us as we share the heartwarming
              rescue story of Luna, a courageous canine who found hope in the
              midst of adversity. Just this week, Emily Rodriguez, a dedicated
              animal lover and volunteer, came across Luna in desperate need of
              help.
            </p>
          </i>
        </div>
      </section>
    </div>
  );
};

export default Video;
