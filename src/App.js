import React from "react";

import "./App.css";
import Header from "./components/header/Header";

import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";

import Main from "./components/main/Main";
import ProductcardList from "./components/card/ProductcardList";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carousel />
      <Main />
      <ProductcardList />
    </div>
  );
}

export default App;
