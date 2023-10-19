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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addProduct",
    element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
  },
  {
    path: "/myCart",
    element: <MyCart></MyCart>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
