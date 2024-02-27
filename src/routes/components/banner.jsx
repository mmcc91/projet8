import img from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/assets/images/ImageFalaise.png"
import "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/Sass/banner.scss"
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