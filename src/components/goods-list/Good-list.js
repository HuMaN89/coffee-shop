import GoodItem from "../Good-item/Good-item";
import "./Good-list.css";
import Img from "../../img/best_1.png";

const GoodList = () => {
  const data = [
    {
      src: Img,
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
      id: "1",
    },
    {
      src: Img,
      name: "AROMISTICO Coffee 1 kg",
      country: "Kenya",
      price: "6.99$",
      id: "2",
    },
    {
      src: Img,
      name: "AROMISTICO Coffee 1 kg",
      country: "Columbia",
      price: "6.99$",
      id: "3",
    },
    {
      src: Img,
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
      id: "4",
    },
    {
      src: Img,
      name: "AROMISTICO Coffee 1 kg",
      country: "Columbia",
      price: "6.99$",
      id: "5",
    },
    {
      src: Img,
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
      id: "6",
    },
  ];
  return (
    <div className="good-list">
      {data.map((element) => {
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
