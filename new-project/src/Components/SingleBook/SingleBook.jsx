import { Col, Button, Card } from "react-bootstrap";

const SingleBook = ({ title, asin, img, price, category }) => {
  return (
    <Col sm md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {category} </Card.Title>
          <Card.Text>
           {asin}
          </Card.Text>
          <Card.Text>
           {title}
          </Card.Text>
          <Button variant="primary"> Acquista a {price} € </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};


export default SingleBook