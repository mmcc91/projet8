import React, { useState } from "react";
import arrowLeft from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/assets/images/arrow_back_ios-24px 1.png";
import arrowRight from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/assets/images/arrow_forward_ios-24px 1.png";
import locations from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/data/donneeslocations.json";

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
      <img src={locationPhotos[imageNumber]}></img>
      <p>{tagline}</p>
      <button onClick={slideLeft}>
        <img src={arrowLeft} alt="Left" />
      </button>
      <button onClick={slideRight}>
        <img src={arrowRight} alt="Right" />
      </button>
    </div>
  );
}

export default Caroussel;
