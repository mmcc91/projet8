import img from "../../assets/images/ImageFalaise.png"
import "../banner.scss"
const Banner = () => {
    return (
      <div className="banner">
        <div className="opacity">
            <img src={img} alt="Falaises" className="bannerImage" /> 
             </div>
          <h1>Chez vous,
          partout et ailleurs
          </h1>
        
        
      </div>
    );
  };
  
  export default Banner;