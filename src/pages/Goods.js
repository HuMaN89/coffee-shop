import Title from "../components/Title/Title";
import { Container, Row, Col } from "react-bootstrap";
import About2 from "../components/about-2/About-2";
import Cup from "../img/cup.png";
import Line from "../img/Line.png";
import GoodList from "../components/goods-list/Good-list";

const Goods = (props) => {
  return (
    <>
      <Title title="For your pleasure" />
      <Container>
        <Row>
          <Col xl="2"></Col>
          <Col xl="4">
            <img src={Cup} alt="girl" className="about-img" />
          </Col>
          <Col xl="4">
            <About2 title="About our goods" />
          </Col>
          <Col xl="2"></Col>
        </Row>
        <Row>
          <img
            src={Line}
            alt="line"
            style={{
              width: "240px",
              display: "block",
              margin: "auto",
              marginBottom: "60px",
            }}
          />
        </Row>
        <Row>
          <GoodList data={props.data} />
        </Row>
      </Container>
    </>
  );
};

export default Goods;
