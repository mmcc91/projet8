import { useRouteError } from "react-router-dom";
import "../pages/error.scss";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="error-container">
      <h1>404</h1>
      <h4>Oups! La page que vous demandez n'existe pas.</h4>

      <NavLink to="/Accueil">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
      </div>
      <Footer />
    </div>
  );
}
