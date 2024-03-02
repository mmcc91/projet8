import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import BannerApropos from '../components/banner/BannerApropos.jsx';
import "../data/dataApropos.json"


const AproposComponent = () => {
  return (
    <div className='Header'>
         <Header />
         <BannerApropos/>
         <p>Do something here!</p>
         <Collapse title="Fiabilité" info={location.fiabilite} />
         <Collapse title="Respect" info={location.respect}  />
         <Collapse title="Service" info={location.service} />
         <Collapse title="Sécurité" info={location.securite}  />
  <Footer/>
        
    </div>
  );
};

export default AproposComponent;