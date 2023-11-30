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
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";
import DashbordPrivateRoute from "./DashbordPrivateRoute";

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
        element: (
          <DashbordPrivateRoute>
            <Dashboard />
          </DashbordPrivateRoute>
        ),
      },
      {
        path: "sales-collection",
        element: (
          <ManagerRoute>
            <SalesCollection />
          </ManagerRoute>
        ),
      },
      {
        path: "manage-product",
        element: (
          <ManagerRoute>
            <ManageProduct />
          </ManagerRoute>
        ),
      },
      {
        path: "subscriptions",
        element: (
          <ManagerRoute>
            <Subscriptions />
          </ManagerRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ManagerRoute>
            <CheckOut />
          </ManagerRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <ManagerRoute>
            <Payment />
          </ManagerRoute>
        ),
      },
      {
        path: "manage-shop",
        element: (
          <AdminRoute>
            <ManageAllShop />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default MainRoute;
