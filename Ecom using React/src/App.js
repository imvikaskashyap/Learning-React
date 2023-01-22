import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";

// function App() {
//   return <div className="app"></div>;
// }

function App(props) {
  const [searchProduct, setSearchProduct] = useState("");
  // console.log(searchProduct);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />
        <Routes>
          <Route path="/" element={<Home searchProduct={searchProduct} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
