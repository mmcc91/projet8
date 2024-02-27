import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const Thumb = ({ DonneesLocations }) => {
  return DonneesLocations.map((DonneesLocations) => (
    <Link to ={`/location/${DonneesLocations.id}`} className="thumb"  key={DonneesLocations.id}>
      <img src={DonneesLocations.cover} alt={DonneesLocations.title} />
      <h3> {DonneesLocations.title}</h3>
    </Link>
  ));
};
Thumb.PropTypes = {
  DonneesLocations: PropTypes.array.isRequired,
};
export default Thumb;
