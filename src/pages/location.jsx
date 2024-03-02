import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Thumb from "../components/thumb/Thumb.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import locations from "../data/data.json";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel/Caroussel.jsx";
import Rating from "../components/rating/Rating.jsx";
import Collapse from "../components/collapse/Collapse.jsx";
// import Rating from "../components/rating/Rating.jsx"


// const dataCurrentAccomodation = datas.find(data => data.id === id);
// const rating = dataCurrentAccomodation.rating;

const findLocationID = (id) => {
  return locations.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id);
  return (
    <div>
      <Header />
      <Caroussel id={id} />
      {/* <p> la location {id} serat ici </p> */}
      <img src={location.host.picture} alt={location.title} />
      <p>{location.host.name}</p>
      <p> {location.title} </p>

      <Rating rating={location.rating} />
      <Collapse 
      title= "Description"
      info={location.description}/>
   
      <Collapse 
      title= "Equipement"
      info={location.equipments}/>
      {/* <p> Description : {location.description}</p>
      <p>
        {" "}
        Equipement :{" "}
        {location.equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </p> */}
      <p> Ici la location du bien : {location.location}</p>
      <Footer />
    </div>
  );
};

export default Location;
