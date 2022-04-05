import "./Bests.css";

const Bests = (props) => {
  return (
    <div className="bests">
      <h2 className="bests-title">Our best</h2>
      <div className="best-items">
        {props.data.map((item) => {
          if (item.id < 4) {
            return (
              <div className="best-item" key={item.id}>
                <img src={item.src} alt="" className="best-img" />
                <span className="best-title">{item.name}</span>
                <span className="best-price">{item.price}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Bests;
