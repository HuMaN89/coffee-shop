import "./Good-item.css";

const GoodItem = (props) => {
  return (
    <div className="good-item" key={props.id}>
      <img className="good-img" src={props.src} alt="" />
      <span className="good-title">{props.name}</span>
      <span className="good-country">{props.country}</span>
      <span className="good-price">{props.price}</span>
    </div>
  );
};

export default GoodItem;
