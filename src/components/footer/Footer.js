import Nav from "../Nav/Nav";
import ImgLogo from "../Img-logo/Img-logo";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Nav color="black" footer="true" />
      <ImgLogo />
    </footer>
  );
};
export default Footer;
