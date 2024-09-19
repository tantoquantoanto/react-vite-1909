import { Container, Row } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Alert from "react-bootstrap/Alert";

const MainSection = ({ books, setBooks, isLoading, isError }) => {
  return (
    <main>
      <Container className="pt-5">
        <Row>
          {isLoading && !isError && <LoadingSpinner />}
          {!isLoading && isError !== "" && (
            <Alert variant="danger">Oops, qualcosa è andato storto...</Alert>
          )}

          {!isLoading &&
            !isError &&
            books.map((book) => (
              <SingleBook
                key={book.asin}
                title={book.title}
                category={book.category}
                price={book.price}
                img={book.img}
              />
            ))}
        </Row>
      </Container>
    </main>
  );
};

export default MainSection;
