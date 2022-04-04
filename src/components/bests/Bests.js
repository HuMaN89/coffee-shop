import "./Bests.css";
import img1 from "../../img/best_1.png";
import img2 from "../../img/best_2.png";
import img3 from "../../img/best_3.png";

const Bests = () => {
  const data = [
    {
      img: img1,
      title: "Solimo Coffee Beans 2 kg",
      price: "10.73$",
      id: "1",
    },
    {
      img: img2,
      title: "Presto Coffee Beans 1 kg",
      price: "15.99$",
      id: "2",
    },
    {
      img: img3,
      title: "AROMISTICO Coffee 1 kg",
      price: "6.99$",
      id: "3",
    },
  ];
  return (
    <div className="bests">
      <h2 className="bests-title">Our best</h2>
      <div className="best-items">
        {data.map((item) => {
          return (
            <div className="best-item" key={item.id}>
              <img src={item.img} alt="" className="best-img" />
              <span className="best-title">{item.title}</span>
              <span className="best-price">{item.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bests;
