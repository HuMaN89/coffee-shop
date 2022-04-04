import Title from "../components/Title/Title";
import { Container, Row, Col } from "react-bootstrap";
import About2 from "../components/about-2/About-2";
import Girl from "../img/girl.png";
import Line from "../img/Line.png";
import SearcPanel from "../components/search-panel/SearcPanel";
import GoodList from "../components/goods-list/Good-list";
const CoffePage = () => {
  return (
    <>
      <Title title="Our Coffee" />
      <Container>
        <Row>
          <Col xl="2"></Col>
          <Col xl="4">
            <img src={Girl} alt="girl" className="about-img" />
          </Col>
          <Col xl="4">
            <About2 title="About our beans" />
          </Col>
          <Col xl="2"></Col>
        </Row>
        <Row>
          <img
            src={Line}
            alt="line"
            style={{ width: "240px", display: "block", margin: "auto" }}
          />
        </Row>
        <Row>
          <SearcPanel />
        </Row>
        <Row>
          <GoodList />
        </Row>
      </Container>
    </>
  );
};

export default CoffePage;
