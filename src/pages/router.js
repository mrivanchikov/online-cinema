import {
    createBrowserRouter,
  } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CatalogPage } from "./CatalogPage";
import { mockData } from "../mockData";

//
const mock = await mockData();
//

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path:"Catalog",
      element:<CatalogPage props={{name:"Catalog",mock:mock, pageLimit:6}}/>
    }
  ]);