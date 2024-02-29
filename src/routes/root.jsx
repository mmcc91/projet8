import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
// ne peux pas etre supprimer sans faire beuguer tout
const App = () => {
  return (
    <div className="Header">
      <Header />
      <p>Page de demarrage avec rien de selectionne sera peut etre supprimer ... a voir </p>
      <Footer />
    </div>
  );
};

export default App;
