import logo from "../../assets/images/LOGO.png"
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
    <img src={logo} alt="logo kasa" />
    <Navigation/>
    </header>
  );
};

export default Header;