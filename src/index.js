import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:"/product/:id",
    element:<Product />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);