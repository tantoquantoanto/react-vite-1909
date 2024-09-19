import "./navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import NavInput from "./NavInput/NavInput";

const NavBar = () => {
  return (
    <nav>
      <Container fluid>
        <Row>
          <Col className=" d-flex align-items-center justify-content-evenly bg-dark text-white py-2">
            <div>Titolo sito</div>
            <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled linkList m-0">
              <li>
                <a href="#">Chi Siamo</a>
              </li>
              <li>
                <a href="#">Carrello</a>
              </li>
              <li>
                {" "}
                <a href="#">Chi siamo</a>
              </li>
              <li>
                <a href="#">Contattaci</a>
              </li>
            </ul>
            <NavInput/>
            
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default NavBar;
