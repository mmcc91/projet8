import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Banner from "../components/banner/Banner.jsx";
import "../main.scss";
import Thumb from "../components/thumb/Thumb.jsx";
import data from "../data/data.json";

const home = () => {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <div className="gallery ">
        <Thumb data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default home;
