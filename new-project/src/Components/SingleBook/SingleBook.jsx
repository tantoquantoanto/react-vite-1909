import { Col, Button, Card } from "react-bootstrap";
import "./style.css"

const SingleBook = ({ searchedBook, title, asin, img, price, category }) => {
  return (
    
    <Col sm md={4} lg={3}>
      <Card className="h-100">
        <Card.Img className="object-fit-contain h-100 card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-normal"> {category.toUpperCase()} </Card.Title>
          <Card.Text>
           {asin}
          </Card.Text>
          <Card.Text className="fw-bold">
           {title}
          </Card.Text>
          <Button variant="primary"> Acquista a {price} € </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};


export default SingleBook