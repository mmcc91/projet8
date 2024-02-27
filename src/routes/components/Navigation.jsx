import { NavLink } from "react-router-dom";


import React from 'react';

const Navigation = () => {
    return (
      <div className="navigation">
        <ul>
          <NavLink to ="/Accueil" className={({isActive}) => (isActive ? "souligne" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to ="/Apropos" className={({isActive}) => (isActive ? "souligne" : "")} >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    );
    }
export default Navigation;