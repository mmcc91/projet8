import "./collapse.scss";
import flecheBas from "../../assets/images/arrow_down.png";
import flecheUp from "../../assets/images/arrow_up.png";
import React, { useState } from "react";

const Collapse = ({ title, info }) => {
  // Assurez-vous de passer title comme prop

  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      <h3 className="collapse_titre" onClick={() => setToggle(!toggle)}>
        {title}
        <img src={toggle ? flecheUp : flecheBas} alt="fleche " className="fleche" />
      </h3>
      <div className={toggle ? "collapse_bascule" : "collapse_nonbascule"}>{Array.isArray(info) ? info.map((text) => text) : info}</div>
    </div>
  );
};

export default Collapse;

// {location.title}}
