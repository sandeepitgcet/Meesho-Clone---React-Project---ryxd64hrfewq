import React from 'react'
import NavBar from './NavBar'
import './../styles/App.css';
import AllProducts from './AllProducts';

export const THEME_COLOR = "rgb(244,51,151)"
const App = () => {


  return (
    <div id="main">
      <NavBar />
      <AllProducts />
    </div>
  )
}


export default App;
