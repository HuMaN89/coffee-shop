import "./Home-title.css";
import ImgLogo from "../Img-logo/Img-logo";
import { Button } from "react-bootstrap";

const HomeTitle = (props) => {
  return (
    <div className="home-title">
      <h1>Everything You Love About Coffee</h1>
      <ImgLogo color="white" />
      <h3>We makes every day full of energy and taste</h3>
      <h3>Want to try our beans?</h3>
      <Button variant="outline-light">More</Button>{" "}
    </div>
  );
};

export default HomeTitle;
