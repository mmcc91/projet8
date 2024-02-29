import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Banner from '../components/banner/Banner.jsx';
import "../main.scss";
import Thumb from '../components/thumb/Thumb.jsx';
import DonneesLocations from "../data/data.json"



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