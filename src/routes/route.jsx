import * as React from "react";
import ErrorPage from "../pages/error-page";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home"
import Apropos from "../pages/apropos"
import Location from "../pages/location"

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
    element: <Location /> ,
    errorElement: <ErrorPage />,
  
  },
 

]);

