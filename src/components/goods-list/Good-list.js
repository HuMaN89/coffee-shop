import GoodItem from "../Good-item/Good-item";
import "./Good-list.css";

const GoodList = (props) => {
  return (
    <div className="good-list">
      {props.data.map((element) => {
        const { id, src, name, country, price } = element;

        return (
          <GoodItem
            key={id}
            src={src}
            name={name}
            country={country}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default GoodList;
