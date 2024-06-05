import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import quizImage from "../assets/img/noimg.jpg";
import gameImage from "../assets/img/game-cards/PawsPedia..png";
import tipsImage from "../assets/img/noimg.jpg";
import posts from "../assets/data/posts.json";
import Slider from "../components/Slider";
import useIntersectionObserver from "../js/useIntersectionObserver";


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
        padding: "0"
      }}
      >
        <Slider />
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
