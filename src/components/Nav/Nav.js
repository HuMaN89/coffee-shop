import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Nav.css";

const Nav = (props) => {
  const linkClazz = `${props.color || "white"} navlink`;
  const navClazz = `${props.footer ? "nav-footer" : "nav"}`;

  return (
    <nav className={navClazz}>
      <NavLink to="/" className={linkClazz}>
        <img src={logo} alt="Logo" className="nav-img" />
        Coffee house
      </NavLink>
      <NavLink to="/coffe-page" className={linkClazz}>
        CoffeePage
      </NavLink>
      <NavLink to="/goods" className={linkClazz}>
        For your pleasure
      </NavLink>
    </nav>
  );
};

export default Nav;
