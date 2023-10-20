import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddProduct from "./Pages/AddProduct";
import MyCart from "./Pages/MyCart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoutes from "./PrivateRoutes";
import EachBrandCards from "./Pages/BrandCards/EachBrandCards";
import Details from "./Pages/Details";
import Error from "./Pages/Error";
import Update from "./Pages/Update";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>
  },
  {
    path: "/addProduct",
    element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
  },
  {
    path: "/myCart",
    element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
    loader: () => fetch(`http://localhost:5000/carts`)
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path:"/brandCards/:id",
    element:<EachBrandCards></EachBrandCards>,
    loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
  },
  {
    path:"/details/:id",
    element:<PrivateRoutes><Details></Details></PrivateRoutes>,
    loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
  },
  {
    path:"/update/:id",
    element: <PrivateRoutes><Update></Update></PrivateRoutes>,
    loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
  }
  
   
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
