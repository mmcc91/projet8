import React, { useState } from "react";
import arrowLeft from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/assets/images/arrow_back_ios-24px 1.png";
import arrowRight from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/assets/images/arrow_forward_ios-24px 1.png";
import locations from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/data/donneeslocations.json";
import "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/Sass/caroussel.scss";

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
