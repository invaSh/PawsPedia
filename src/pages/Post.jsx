import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Carousel,
} from "react-bootstrap";
import posts from "../assets/data/posts.json";

const Post = () => {
  const arrowStyles = {
    backgroundColor: "#000",
    borderRadius: "50%",
  };

  const { id } = useParams();
  const post = posts.find((post) => post.postId === id);

  const contentWithBreaks = post.content.replace(/\n\n/g, "<br /><br />");

  if (!post) {
    return <div>Post not found</div>;
  }

  const tagColors = [
    "primary",
    "secondary",
    "info",
    "light",
    "dark",
    "danger",
    "warning",
    "primary",
    "secondary",
    "info",
    "light",
    "dark",
    "danger",
    "warning",
    "primary",
    "secondary",
    "info",
    "light",
    "dark",
    "danger",
    "warning",
  ];
  const tags = [
    "Adoption",
    "Rescue",
    "Foster",
    "Shelter",
    "AdoptDontShop",
    "ForeverHome",
    "SpayAndNeuter",
    "AnimalWelfare",
    "PetRescue",
    "PetAdoption",
    "AnimalShelter",
    "AdoptablePets",
    "AdoptionEvents",
    "PetFostering",
    "AdoptionAwareness",
    "AnimalAdoption",
    "FosterPets",
    "AdoptionAgency",
    "PetAdoptionCenter",
    "RescuePets",
    "AdoptionSuccess",
  ];

  const randomPosts = posts.slice(5, 8).map((post) => (
    <ListGroup.Item
      key={post.postId}
      className="d-flex justify-content-between align-items-start"
    >
      <span>
        <h6>{post.title}</h6>
        <p className="text-muted">{post.author}</p>
      </span>
      <Link to={`/post/${post.postId}`}>
        <Button variant="secondary">Read more</Button>
      </Link>
    </ListGroup.Item>
  ));

  return (
    <div>
      <Row>
        <Col lg={8} style={{ padding: "3rem 2rem" }}>
          <Container>
            <Card>
              <Carousel
                prevIcon={
                  <span
                    className="carousel-control-prev-icon"
                    style={arrowStyles}
                    aria-hidden="true"
                  />
                }
                nextIcon={
                  <span
                    className="carousel-control-next-icon"
                    style={arrowStyles}
                    aria-hidden="true"
                  />
                }
              >
                {post.images.map((imageUrl, index) => (
                  <Carousel.Item key={index} className="custom-carousel-item">
                    <img
                      className="d-block w-100 custom-carousel-item"
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title className="text-dark">
                  <h1>{post.title}</h1>
                </Card.Title>
                <Row className="align-items-center border-bottom border-2 my-3 py-3">
                  <div className="col-1">
                    <img
                      src={post.profileImage}
                      style={{
                        maxWidth: "85px",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="col-11">
                    <h5>
                      <strong>{post.author}</strong>
                    </h5>
                    <h6 className="">{post.date}</h6>
                  </div>
                </Row>
                <Card.Text>
                  <p dangerouslySetInnerHTML={{ __html: contentWithBreaks }} />
                </Card.Text>
              </Card.Body>
              <Card.Footer className="py-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`badge bg-${
                      tagColors[index % tagColors.length]
                    } fs-5 my-3 me-3`}
                  >
                    {tag}
                  </span>
                ))}
              </Card.Footer>
            </Card>
          </Container>
          <Container className="my-5">
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>New Comment</h5>
                <Button variant="dark">Submit</Button>
              </Card.Header>
              <Card.Body>
                <Row className="justify-content-center">
                  <div className="col-2">
                    <img
                      src={post.profileImage}
                      style={{
                        width: "80%",
                        borderRadius: "20%",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <textarea
                      name=""
                      rows={5}
                      style={{
                        width: "100%",
                        border: "1px solid #E5E4E2",
                        borderRadius: "20px",
                        resize: "none",
                      }}
                      id=""
                    ></textarea>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Container>
          <Container className="card">
            <Card.Header>
              <h5 className="text-dark py-3">5 Comments</h5>
            </Card.Header>
            {post.comments.map((comment, index) => (
              <div className="px-3">
                <Card className="my-3 p-3" key={index}>
                  <Row className="justify-content-center">
                    <div className="col-2">
                      <img
                        src={comment.authorImg}
                        style={{
                          width: "80%",
                          borderRadius: "20%",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="col-10">
                      <h6>{comment.author}</h6>
                      <p>{comment.content}</p>
                      <p>{comment.date}</p>
                    </div>
                  </Row>
                </Card>
              </div>
            ))}
          </Container>
        </Col>
        <Col lg={4} style={{ padding: "3rem 2rem" }}>
          <Card className="mb-3">
            <Card.Header>
              <h5>Check out other posts</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {randomPosts}
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h5>Check out other tags</h5>
            </Card.Header>
            <Card.Body>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`badge bg-${tagColors[index]} m-3 fs-5`}
                >
                  {tag}
                </span>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Post;
