import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import locations from "../data/data.json";
import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel/Caroussel.jsx";
import Rating from "../components/rating/Rating.jsx";
import Collapse from "../components/collapse/Collapse.jsx";
import "./location.scss";

const findLocationID = (id) => {
  return locations.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id);
  return (
    <div className="location">
      <Header />
      <Caroussel id={id} />
      <div className="container_up">
        <div className="left-up">
          <div className="detail_titre">
            <h1> {location.title} </h1>
            <p> {location.location}</p>
          </div>
          <div className="tags">
            {location.tags.map((tag) => {
              return <div key={tag} className="tag">{tag}</div>;
            })}
          </div>
        </div>

        <div className="right-down">
          <div className="detail_host">
            
            <img className="detail_host_img" src={location.host.picture} alt={location.title} />
            <p>{location.host.name}</p>
          </div>
          <div className="rating">
            <Rating rating={location.rating} />
          </div>
        </div>
      </div>
      <div className="collapse_container">
        <Collapse title="Description" info={location.description} />
        <Collapse title="Equipement" info={location.equipments} />
      </div>

      <Footer />
    </div>
    
  );
  
};

export default Location;
