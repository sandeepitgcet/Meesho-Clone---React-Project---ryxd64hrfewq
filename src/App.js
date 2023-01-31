import React from 'react'
import Home from './components/Home';
import './styles/App.css';

export const THEME_COLOR = "rgb(244,51,151)"

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
import Login from './components/Login';
import SignUp from './components/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path:"product/:id",
    element:<Product />,
    errorElement: <ErrorPage />,
  },
  {
    path:"login",
    element: <Login />
  },
  {
    path:'signup',
    element:<SignUp />
  }
]);

const App = () => {

  return (
        <RouterProvider router={router}/>
  )
}


export default App;
