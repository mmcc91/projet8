import img from "../../assets/images/imageForet.png";
import "./banner.scss";
const BannerApropos = () => {
  return (
    <div className="banner">
      <img src={img} alt="Foret" className="bannerAproposImage" />
    </div>
  );
};

export default BannerApropos;
