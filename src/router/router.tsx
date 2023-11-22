import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import MainPage from "../pages/MainPage"
import DocumentPage from "../pages/DocumentPage"
import BasketPage from "../pages/BasketPage"
import ErrorPage from "../pages/ErrorPage"
export const RouterWeb = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:path/:name",
        element: <DocumentPage />,
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },
    ],
  },
])
