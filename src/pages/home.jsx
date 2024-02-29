import React from 'react';
import Header from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/routes/components/Header.jsx";
import Footer from '../routes/components/Footer.jsx';
import Banner from '../routes/components/banner.jsx';
import "../main.scss";
import Thumb from '../routes/components/Thumb.jsx';
import DonneesLocations from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/data/donneeslocations.json"



const HomeComponent = () => {
  return (
    <div className='Home'>
        <Header />
        <Banner />
        <p> Welcome Home! </p>
        <div className='gallery '>
        <Thumb DonneesLocations={DonneesLocations}/>
        </div>
  <Footer/>
    </div>
  );
};

export default HomeComponent;