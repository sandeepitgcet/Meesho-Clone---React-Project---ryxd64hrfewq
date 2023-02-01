import React, { createContext, useEffect, useState } from 'react'
import Home from './pages/Home';
import './styles/App.css';

export const THEME_COLOR = "rgb(244,51,151)"

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./components/Product";
import ErrorPage from "./pages/ErrorPage";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase/auth';

export const AuthContext = createContext();

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
  },
  {
    path:'*',
    element:<ErrorPage />
  }
]);

const App = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const handleAuthChange = (userr) => {
      if (userr) {
        setUser(userr)
        return;
      }
      setUser({});
    };

    const unsubscribe = onAuthStateChanged(auth, handleAuthChange);

    return () => unsubscribe();
  }, []);


  return (
        <AuthContext.Provider value={{user,setUser}}>
          <RouterProvider router={router}/>
        </AuthContext.Provider>
        
  )
}


export default App;
