import "./Title.css";
import CoffeBG from "../../img/coffeePage_bg.jpg";
import GoodBG from "../../img/goods_bg.jpg";
const Title = (props) => {
  let bg = "";
  if (props.page === "coffee") {
    bg = CoffeBG;
  } else {
    bg = GoodBG;
  }
  return (
    <div className="title" style={{ background: `url(${bg}) no-repeat` }}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
