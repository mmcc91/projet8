import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Thumb from "../components/thumb/Thumb.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import location from "../data/data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel/Caroussel.jsx";


const findLocationID = (id) => {
  return location.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id);
  return (
    <div>
      <Header />
      <Caroussel id={id} />
      <p> la location {id} serat ici </p>
      <img src={location.host.picture} alt={location.title} />
      <p> le titre :{location.title} </p>
      <p> Description : {location.description}</p>
      <p>
        {" "}
        Equipement :{" "}
        {location.equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </p>
      <p> Ici la location du bien : {location.location}</p>
      <Footer />
    </div>
  );
};

export default Location;
