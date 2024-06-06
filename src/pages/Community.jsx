import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import gameImage from "../assets/img/game-cards/PawsPedia..png";
import posts from "../assets/data/posts.json";
import Hero from "../pages/Hero";

const Community = () => {
  const navigate = useNavigate();

  const getContentUntilFirstPeriod = (content) => {
    const firstPeriodIndex = content.indexOf(".");
    if (firstPeriodIndex !== -1) {
      return content.substring(0, firstPeriodIndex + 1);
    } else {
      return content;
    }
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <>
      <Container
        fluid
        style={{
          marginBottom: "8rem",
          padding: "0",
          height: "80vh",
        }}
        className="hero-container"
      >
        <div className="hero-titlee text-center ">
          <h1 className="animate__animated animate__fadeInDown">Join Our Pet-Loving Community</h1>
          <p className="animate__animated animate__fadeInDown" style={{ animationDelay:"0.5s" }}>
            Welcome to Our Pet-Loving Community! Discover the fulfillment of
            adopting, nurturing, and connecting with pets. Share in the joy of
            building loving relationships that enrich both human and animal
            lives.
          </p>
        </div>
        <Hero />
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={gameImage} />
              <Card.Body>
                <Card.Title>Play a Game</Card.Title>
                <Card.Text>
                  Enjoy our interactive game and have fun with virtual pets!
                </Card.Text>
                <Button variant="primary" href="/memorygame">
                  Go
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h3 className="text-dark my-5 text-center">Read our forum</h3>
        </Row>
        <Row className="justify-content-md-center gap-5">
          {posts.map((post, index) => (
            <Card key={index}>
              <Card.Header as="h5">By @{post.author}</Card.Header>
              <Row className="align-items-center">
                <div className="col-sm-2 d-flex justify-content-center p-4">
                  <img
                    src={post.profileImage}
                    style={{
                      borderRadius: "30px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                      {getContentUntilFirstPeriod(post.content)}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handlePostClick(post.postId)}
                    >
                      Go to post
                    </Button>
                  </Card.Body>
                </div>
              </Row>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Community;
