import logo from "../../assets/images/logo.png"
import Navigation from "../navigation/Navigation.jsx";

const Header = () => {
  return (
    <header>
    <img src={logo} alt="logo kasa" />
    <Navigation/>
    </header>
  );
};

export default Header;