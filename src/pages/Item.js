import Title from "../components/Title/Title";
import { Container, Row, Col } from "react-bootstrap";
import AboutItem from "../components/about-item/About-item";
import Cup from "../img/cup.png";
import Line from "../img/Line.png";
import GoodList from "../components/goods-list/Good-list";

const Item = () => {
  return (
    <>
      <Title title="Our Coffee" page="coffee" />
      <Container>
        <Row>
          <Col xl="2"></Col>
          <Col xl="4">
            <img src={Cup} alt="girl" className="about-img" />
          </Col>
          <Col xl="4">
            <AboutItem title="About it" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Item;
