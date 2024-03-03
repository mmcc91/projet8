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
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
     
        <NavLink to ="/Accueil"  >
            <p>Retourner sur la page d’accueil</p>
          </NavLink>
    <Footer />
    </div>
  );
}


   
