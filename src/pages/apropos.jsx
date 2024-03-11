import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import BannerApropos from "../components/banner/BannerApropos.jsx";
import services from "../data/dataApropos.json";
import Collapse from "../components/collapse/Collapse.jsx";
import "./apropos.scss";
const AproposComponent = () => {
  return (
    <div className="apropos">
      <Header />
      <BannerApropos />
      <div className="container-collapse-apropos">
        {services.map((service) => {
          return <Collapse title={service.title} info={service.text} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AproposComponent;
