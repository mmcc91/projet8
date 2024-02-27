import React from "react";
import PropTypes from "prop-types";

const Thumb = ({ DonneesLocations }) => {
  return DonneesLocations.map((DonneesLocations) => (
    <div className="thumb"  key={DonneesLocations.id}>
      <img src={DonneesLocations.cover} alt={DonneesLocations.title} />
      <h3> {DonneesLocations.title}</h3>
    </div>
  ));
};
Thumb.PropTypes = {
  DonneesLocations: PropTypes.array.isRequired,
};
export default Thumb;
