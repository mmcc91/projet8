import img from "../../assets/images/imageForet.png"
import "./banner.scss"
const BannerApropos = () => {
    return (
      <div className="banner">
       <div className="opacity">
            <img src={img} alt="Foret" className="bannerAproposImage" /> 
             </div>
      </div>
    );
  };
  
  export default BannerApropos;