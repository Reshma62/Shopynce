import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContextProviders from "./Context/AuthContextProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProviders from "./Providers/ThemeProviders.jsx";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
import GlobalStyles from "@mui/material/GlobalStyles";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviders>
      <QueryClientProvider client={queryClient}>
        <AuthContextProviders>
          <GlobalStyles
            styles={{
              ul: {
                margin: 0,
                padding: 0,
                listStyle: "none",
              },
              a: {
                textDecoration: "none",
              },
              img: {
                maxWidth: "100%",
              },
            }}
          />
          <RouterProvider router={MainRoute} />
        </AuthContextProviders>
      </QueryClientProvider>
      <CssBaseline />
      <Toaster />
    </ThemeProviders>
  </React.StrictMode>
);
