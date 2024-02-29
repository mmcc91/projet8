import React, { useState } from "react";
import arrowLeft from "../../assets/images/arrow_back.png";
import arrowRight from "../../assets/images/arrow_right.png";
import locations from "../../data/data.json";
import "./caroussel.scss";

function Caroussel({ id }) {
  const [imageNumber, setImageNumber] = useState(0);

  const location = locations.find((location) => location.id === id);
  const locationPhotos = location.pictures;
  const tagline = location.description;

  const slideLeft = () => {
    setImageNumber((prevImageNumber) => (prevImageNumber === 0 ? locationPhotos.length - 1 : prevImageNumber - 1));
  };

  const slideRight = () => {
    setImageNumber((prevImageNumber) => (prevImageNumber === locationPhotos.length - 1 ? 0 : prevImageNumber + 1));
  };

  return (
    <div>
      <div className="caroussel">

        <img className="arrowLeft" src={arrowLeft} alt="Left" onClick={slideLeft} />

        <img className="slider" src={locationPhotos[imageNumber]} alt="{tagline}"></img>

        <img className="arrowRight" src={arrowRight} alt="Right" onClick={slideRight} />
      </div>

  
      
    </div>
  );
}

export default Caroussel;
