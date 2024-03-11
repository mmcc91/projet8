import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { RouterProvider } from "react-router-dom";
// import router from './routes/route.jsx'

import ErrorPage from "./pages/error-page";
import { createBrowserRouter } from "react-router-dom";

import Apropos from "./pages/apropos";
import Location from "./pages/location";

const App = () => {
  return (
    <div className="Header">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Accueil",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Apropos",
    element: <Apropos />,
    errorElement: <ErrorPage />,
  },

  {
    path: "location/:id",
    element: <Location />,
    errorElement: <ErrorPage />,
  },
]);
