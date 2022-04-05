import "./About-item.css";
import ImgLogo from "../Img-logo/Img-logo";

const AboutItem = (props) => {
  return (
    <div className="about-item">
      <h2 className="about-title">{props.title}</h2>
      <ImgLogo />
      <div className="about-text-item">
        <p>Country:</p>
        <p>Description:</p>
        <p>Price: </p>
      </div>
    </div>
  );
};
export default AboutItem;
