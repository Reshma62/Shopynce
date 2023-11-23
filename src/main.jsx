import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContextProviders from "./Context/AuthContextProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProviders from "./Providers/ThemeProviders.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviders>
      <QueryClientProvider client={queryClient}>
        <AuthContextProviders>
          <RouterProvider router={MainRoute} />
        </AuthContextProviders>
      </QueryClientProvider>
    </ThemeProviders>
  </React.StrictMode>
);