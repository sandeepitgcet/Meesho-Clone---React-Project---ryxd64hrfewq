import React from 'react'
import Home from './Home';
import './../styles/App.css';

export const THEME_COLOR = "rgb(244,51,151)"

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./Product";
import ErrorPage from "./ErrorPage";
import { display } from '@mui/system';
import Login from './Login';
import SignUp from './SignUp';


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
