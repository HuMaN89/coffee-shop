import { Component } from "react";
import "./App.css";
import Header from "../header/header";
import Footer from "../footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoffeePage from "../../pages/CoffeePage";
import Goods from "../../pages/Goods";
import Item from "../../pages/Item";
// import Item from "../../pages/Item";
import Error from "../../pages/Error";
import Img1 from "../../img/best_1.png";
import Img2 from "../../img/best_2.png";
import Img3 from "../../img/best_3.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          src: Img3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          id: "1",
        },
        {
          src: Img1,
          name: "AROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: "6.99$",
          id: "2",
        },
        {
          src: Img2,
          name: "ROMA 1Kg Selection Blend",
          country: "Columbia",
          price: "6.99$",
          id: "3",
        },
        {
          src: Img3,
          name: "NAPOLI 1Kg Selection Blend",
          country: "Brazil",
          price: "6.99$",
          id: "4",
        },
        {
          src: Img2,
          name: "FIRENZE 1Kg Decaf Blend",
          country: "Columbia",
          price: "6.99$",
          id: "5",
        },
        {
          src: Img1,
          name: "ROMA Selection Blend",
          country: "Brazil",
          price: "6.99$",
          id: "6",
        },
      ],
      term: "",
    };
  }
  onUpdateProps = (prop) => {
    switch (prop) {
      // case "moreThen1000":
      //   this.setState({ filter: "moreThen1000" });
      //   break;
      // case "rise":
      //   this.setState({ filter: "rise" });
      //   break;
      // case "all":
      //   this.setState({ filter: "all" });
      //   break;
      default:
        this.setState({ term: prop });
        break;
    }
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  render() {
    const { data, term } = this.state;
    const visebleData = this.searchEmp(data, term);
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={this.state.data} />} />
          <Route
            path="/coffe-page"
            element={
              <CoffeePage
                data={visebleData}
                onUpdateProps={this.onUpdateProps}
              />
            }
          />
          <Route path="/goods" element={<Goods data={visebleData} />} />
          <Route path="/coffe-page/1" element={<Item />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
