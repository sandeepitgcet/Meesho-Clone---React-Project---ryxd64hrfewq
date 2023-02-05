import React, { createContext, useEffect, useState } from 'react'
import Home from './pages/Home';
import './styles/App.css';
import store from './services/redux/store';
import { Provider } from 'react-redux';

export const THEME_COLOR = "rgb(244,51,151)"

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";
import Login from './pages/Login';
import Checkout from './pages/Checkout'
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Main from './pages/Main';

//const Login = React.lazy(() => import('./pages/Login'));

export const AuthContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path:"product/:id",
        element: <Product />,
      },
      {
        path:"login",
        element: <ProtectedRoute><Login /></ProtectedRoute>
      },
      {
        path:'signup',
        element: <ProtectedRoute><SignUp /></ProtectedRoute>
      },
      {
        path:'checkout',
        element: <ProtectedRoute><Checkout /></ProtectedRoute>
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage />
  }
]);

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider> 
  )
}


export default App;
