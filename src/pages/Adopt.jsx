import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import noImg from "../assets/img/noimg.jpg";
import Pagination from "react-bootstrap/Pagination";

const Adopt = () => {
  return (
    <>
      <section className="row" style={{ display: "flex" }}>
        <div
          className="col-lg-7 p-5"
          style={{ display: "flex", alignItems: "stretch" }}
        >
          <Card className="m-5" style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-lg-4 p-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card className="m-5" style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="m-5" style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section className="row p-5">
        <div className="col-lg-3 p-5">
          <Card style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-5">
          <Card style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-5">
          <Card style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-5">
          <Card style={{ flex: 1 }}>
            <Card.Img variant="top" src={noImg} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="row justify-content-center">
        <div className="col-lg-3">
          <Pagination className="custom-pagination">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default Adopt;
