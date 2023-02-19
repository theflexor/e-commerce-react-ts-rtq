import { Layout } from "../../layout/Layout";
import { AuthPage, Basket, Main, Product } from "@page/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const RouteLinks = {
  MAIN: "/",
  PRODUCT: "/product",
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RouteLinks.MAIN,
        element: <Main />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/orders",
        element: <Basket />,
      },
    ],
  },
  {
    element: <AuthPage />,
    path: "/auth",
  },
]);

export const RoutesRender = () => {
  return (
    <RouterProvider router={router} fallbackElement={<div>loading....</div>} />
  );
};
