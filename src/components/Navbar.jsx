import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/logo.png";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        width: "70%",
        margin: "30px auto",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
      className="animate__animated animate__slideInDown"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px" }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/adoption">Find a pet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/list">List a pet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/community">Community</Nav.Link>
            <Button variant="primary" className="rounded-5 text-light">Log in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
