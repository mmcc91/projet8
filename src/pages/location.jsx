import React from "react";
import Header from "../routes/components/Header.jsx";
import Footer from "../routes/components/Footer.jsx";
import Thumb from "../routes/components/Thumb.jsx";
import Navigation from "../routes/components/Navigation.jsx";
import DonneesLocation from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/data/donneeslocations.json"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const findLocationID =(id)=>{
  return location.find((location)=>location.id ===id);
}



const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id)
  return (
    <div>
      <Header />
      <p> la location {id} serat ici </p>
      <Footer />
    </div>
  );
};

export default Location;
