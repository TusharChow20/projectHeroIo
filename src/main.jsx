import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import { RouterProvider } from "react-router/dom";
import RootLayOut from "./RootLayOut/RootLayOut";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Apps from "./Pages/Apps.jsx/Apps";
import AppDetails from "./Pages/Apps.jsx/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        index: true,
        loader: () => axios("/deliverData.json"),
        Component: Home,
      },
      {
        path: "/home",
        loader: () => axios("/deliverData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => axios("/deliverData.json"),
        Component: Apps,
      },
      {
        path: "/apps/:id",
        loader: () => axios(`/deliverData.json`),
        Component: AppDetails,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
