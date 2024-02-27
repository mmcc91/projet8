import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from "./pages/apropos";
import Home from "./pages/home";
import Error from "./error-page";
import Location from "./pages/location";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const basename = import.meta.env.MODE === "production" ? "/kasa" : "";
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" replace />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/location/:id" element={<Location/:id />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
