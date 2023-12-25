import {
    createBrowserRouter,
  } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CatalogPage } from "./CatalogPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path:"Catalog",
      element:<CatalogPage/>
    }
  ]);