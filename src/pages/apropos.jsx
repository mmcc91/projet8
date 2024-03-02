import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import BannerApropos from '../components/banner/BannerApropos.jsx';


const AproposComponent = () => {
  return (
    <div className='Header'>
         <Header />
         <BannerApropos/>
         <p>Do something here!</p>
  <Footer/>
        
    </div>
  );
};

export default AproposComponent;