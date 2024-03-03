import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import BannerApropos from "../components/banner/BannerApropos.jsx";
import services from "../data/dataApropos.json";
import Collapse from "../components/collapse/Collapse.jsx";

const AproposComponent = () => {
  return (
    <div className="Header">
      <Header />
      <BannerApropos />
      {services.map((service) => {
        return <Collapse title={service.title} info={service.text} />;
      })}

      <Footer />
    </div>
  );
};

export default AproposComponent;
