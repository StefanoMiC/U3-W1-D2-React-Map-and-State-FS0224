import { Badge, Carousel, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import menu from "../data/menu.json";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Carousel>
            {/* per usare il map all'interno del JSX abbiamo bisogno di creare un'area di contenuto dinamico per 
            andare a risolvere l'espressione direttamente sul posto, quindi risolvere il map, 
            che si lascerà dietro di sé un array di elementi React che verranno renderizzati nella pagina.
            
            Per un corretto uso del map, avremo bisogno di applicare SEMPRE una prop key sul primo elemento ritornato dal map,
            per evitare che React ricrei l'intera lista nel caso in cui uno degli elementi debba cambiare nel tempo.
            */}
            {menu.map(dish => {
              return (
                <Carousel.Item key={`dish-${dish.id}`}>
                  <Image src={dish.image} className="w-100" />
                  <Carousel.Caption>
                    <h3>{dish.name}</h3>
                    <p>
                      {dish.description} <Badge bg="dark">{dish.price}€</Badge>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          <ListGroup>
            {menu[0].comments.map((review, i) => {
              return (
                <ListGroup.Item key={`comment-${review.id}`} className="d-flex justify-content-between align-items-center">
                  <span>
                    {review.author} — {review.comment}
                  </span>
                  <Badge bg="dark" pill>
                    {review.rating}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
