import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const Thumb = ({ data }) => {
  return data.map((data) => (
    <Link to ={`/location/${data.id}`} className="thumb"  key={data.id}>
      <img src={data.cover} alt={data.title} />
      <h3> {data.title}</h3>
    </Link>
  ));
};
Thumb.PropTypes = {
  data: PropTypes.array.isRequired,
};
export default Thumb;
