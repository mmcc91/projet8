import "./collapse.scss"
import flecheBas from "../../assets/images/arrow_down.png"
import flecheUp from "../../assets/images/arrow_up.png"
import React, { useState } from 'react';
import location from "../../data/data.json";

const Collapse = ({ title, info }) => { // Assurez-vous de passer title comme prop

    const [toggle, setToggle] = useState(false);

    return (
        <div className="collapse">
            <h3 className='collapse_titre' onClick={() => setToggle(!toggle)} >
                {title}
                <img src={flecheBas} alt='fleche direction bas' className='fleche' />
            </h3>
            <div className={toggle ? 'collapse_bascule' : 'collapse_nonbascule'}>
                {Array.isArray (info) ? info.map ((text)=> text ) : info

                }
            </div>
        </div>
    )
}

export default Collapse;



// {location.title}}