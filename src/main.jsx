import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./pages/error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home"
import Apropos from "./pages/apropos"
import Location from "./pages/location"
import "./main.scss";
import Root from "./routes/root";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);