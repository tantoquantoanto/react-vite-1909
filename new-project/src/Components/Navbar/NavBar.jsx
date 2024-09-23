import "./navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import NavInput from "./NavInput/NavInput";

const NavBar = ({inputValue, setInputValue, books, setBooks, allBooks, searchBooks}) => {
  return (
    <nav>
      <Container fluid>
        <Row>
          <Col className=" d-flex align-items-center justify-content-between bg-dark text-white py-2 px-3">
            <div>Titolo sito</div>
            <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled linkList m-0">
              <li>
                <a href="#">Menu</a>
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
            <NavInput
           books={books}
           setBooks={setBooks}
           allBooks={allBooks}
           searchBooks={searchBooks}
           inputValue={inputValue}
           setInputValue={setInputValue}/>
            
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default NavBar;
