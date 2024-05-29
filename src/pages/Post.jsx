import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const Post = () => {
  return (
    <div>
      <Row>
        <Col lg={8} style={{ padding: "3rem 2rem" }}>
          <Container>
            <Card>
              <Card.Img
                variant="top"
                className="p-3"
                src="src/assets/img/noimg.jpg"
              />
              <Card.Body>
                <Card.Title className="text-dark">
                  <h1>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </h1>
                </Card.Title>
                <Row className="align-items-center border-bottom border-2 my-3 py-3">
                  <div className="col-1">
                    <img
                      src="src/assets/img/avatars/avatar5.png"
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
                      <strong>Name</strong>
                    </h5>
                    <h6 className="">Date</h6>
                  </div>
                </Row>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis auteirure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. <br />{" "}
                  <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </Card.Text>
              </Card.Body>
              <Card.Footer className="py-3">
                <span className="badge bg-primary fs-5 my-3 me-3"> smth</span>
                <span className="badge bg-secondary fs-5 my-3 me-3"> smth</span>
                <span className="badge bg-warning fs-5 my-3 me-3"> smth</span>
                <span className="badge bg-danger fs-5 my-3 me-3"> smth</span>
                <span className="badge bg-dark fs-5 my-3 me-3"> smth</span>
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
                      src="src/assets/img/avatars/avatar5.png"
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
          <Container className="bg-white">
            <h5 className="text-dark py-3">5 Comments</h5>
            <Card className="my-3 p-3">
              <Row className="justify-content-center">
                <div className="col-2">
                  <img
                    src="src/assets/img/avatars/avatar5.png"
                    style={{
                      width: "80%",
                      borderRadius: "20%",
                    }}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <h6>Name</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum nesciunt harum vero incidunt, numquam molestiae
                    debitis libero, vel ipsam deserunt delectus voluptatibus
                    reprehenderit nihil itaque eius dolore expedita quas
                    voluptate animi sit recusandae porro! Non facilis natus eius
                    repudiandae, saepe voluptates perspiciatis ex eligendi
                    velit, molestias, dolorem pariatur voluptatem deleniti.
                  </p>
                </div>
              </Row>
            </Card>
          </Container>
        </Col>
        <Col lg={4} style={{ padding: "3rem 2rem" }}>
          <Card className="mb-3">
            <Card.Header>
              <h5>Check out other posts</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <span>
                    <h6>Cras justo odio</h6>
                    <p className="text-muted">Author</p>
                    </span>
                    <Button variant="secondary">Read more</Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <span>
                    <h6>Cras justo odio</h6>
                    <p className="text-muted">Author</p>
                    </span>
                    <Button variant="secondary">Read more</Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <span>
                    <h6>Cras justo odio</h6>
                    <p className="text-muted">Author</p>
                    </span>
                    <Button variant="secondary">Read more</Button>
                </ListGroup.Item>
               
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h5>Check out other tags</h5>
            </Card.Header>
            <Card.Body>
             <span className="badge bg-primary m-3 fs-5">Tag</span>
             <span className="badge bg-secondary m-3 fs-5">Tag</span>
             <span className="badge bg-info m-3 fs-5">Tag</span>
             <span className="badge bg-light text-dark m-3 fs-5">Tag</span>
             <span className="badge bg-dark m-3 fs-5">Tag</span>
             <span className="badge bg-danger m-3 fs-5">Tag</span>
             <span className="badge bg-warning m-3 fs-5">Tag</span>
             <span className="badge bg-primary m-3 fs-5">Tag</span>
             <span className="badge bg-secondary m-3 fs-5">Tag</span>
             <span className="badge bg-info m-3 fs-5">Tag</span>
             <span className="badge bg-light text-dark m-3 fs-5">Tag</span>
             <span className="badge bg-dark m-3 fs-5">Tag</span>
             <span className="badge bg-danger m-3 fs-5">Tag</span>
             <span className="badge bg-warning m-3 fs-5">Tag</span>
             <span className="badge bg-primary m-3 fs-5">Tag</span>
             <span className="badge bg-secondary m-3 fs-5">Tag</span>
             <span className="badge bg-info m-3 fs-5">Tag</span>
             <span className="badge bg-light text-dark m-3 fs-5">Tag</span>
             <span className="badge bg-dark m-3 fs-5">Tag</span>
             <span className="badge bg-danger m-3 fs-5">Tag</span>
             <span className="badge bg-warning m-3 fs-5">Tag</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Post;
