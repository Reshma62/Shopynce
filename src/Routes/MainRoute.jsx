import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../components/Dashboard/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

import CreateShop from "../pages/CreateShop/CreateShop";
import PrivateRoute from "./PrivateRoute";
import ManageProduct from "../pages/Dashboard/Manager/ProductManagment/ManageProduct";
import SalesCollection from "../pages/Dashboard/Manager/SalesCollections/SalesCollection";
import Subscriptions from "../pages/Dashboard/Manager/Subscriptions/Subscriptions";
import CheckOut from "../pages/Dashboard/Manager/CheckOut/CheckOut";
import Payment from "../pages/Dashboard/Manager/CheckOut/Payment";
import ManageAllShop from "../pages/Dashboard/Admin/ManageShop/ManageAllShop";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "create-shop",

        element: (
          <PrivateRoute>
            <CreateShop />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "sales-collection",
        element: <SalesCollection />,
      },
      {
        path: "manage-product",
        element: <ManageProduct />,
      },
      {
        path: "subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "manage-shop",
        element: <ManageAllShop />,
      },
    ],
  },
]);

export default MainRoute;
