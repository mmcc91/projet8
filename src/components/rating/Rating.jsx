import PropTypes from "prop-types";
import React from "react";
import redStarImg from "../../assets/images/redStar.png";
import greyStarImg from "../../assets/images/greyStar.png";



const Rating = ({ rating }) => { // Déclarez les props dans les paramètres de la fonction
  const totalStars = 5;

  let redStar = [];
  let greyStar = [];

  for (let index = 0; index < rating; index++) { // Utilisez la prop rating
    redStar.push(<img className="redStar" key={index} src={redStarImg} alt="etoile rouge positive" />);
  }

  for (let index = 0; index < totalStars - rating; index++) { // Utilisez la prop rating
    greyStar.push(<img className="greyStar" key={index} src={greyStarImg} alt="etoile vide " />);
  }

  return (
    <>
   
      {redStar}
      {greyStar}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired, // Utilisez rating comme prop
};

export default Rating;



