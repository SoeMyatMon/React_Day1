import About_Us from "../pages/About_Us";
import My_Cart from "../pages/My_Cart";
import Product_Details from "../pages/Product_Details";
import Home from "../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/about_us", element: <About_Us /> },
      { path: "/my_cart", element: <My_Cart /> },
      { path: "/product_details", element: <Product_Details /> },
    ],
  },
]);

export default router;
