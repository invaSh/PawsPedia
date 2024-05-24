import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useIntersectionObserver from "../js/useIntersectionObserver";

const Cards = ({ img, title, desc, delayFactor }) => {


  const elementRef = useIntersectionObserver("animate__zoomIn");

  console.log(delayFactor) ;

  return (

    <Card style={{ width: "18rem", animationDelay: `${delayFactor}s` }} className="rounded-3 hidden" ref={elementRef}>
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "270px", objectFit: "cover", width: "100%",}}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="primary" className="text-white">Read more</Button>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
