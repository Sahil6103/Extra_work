import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-transparent px-5 py-4">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light fw-bold">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-light fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light fw-semibold">
              About Us
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light fw-semibold">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
