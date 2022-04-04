import "./App.css";
import Header from "../header/header";
import Footer from "../footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoffeePage from "../../pages/CoffeePage";
import Goods from "../../pages/Goods";
// import Item from "../../pages/Item";
import Error from "../../pages/Error";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffe-page" element={<CoffeePage />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
