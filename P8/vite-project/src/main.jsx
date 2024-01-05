import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./sass/main.scss";
import Layout from "./page/layout.jsx";
import Home, { loader as homeloader } from "./page/home.jsx";
import ErrorPage from "./page/error.jsx";
import About from "./page/about.jsx";
import House, { loader as houseloader } from "./page/house.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeloader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/house/:houseId",
        element: <House />,
        loader: houseloader,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
