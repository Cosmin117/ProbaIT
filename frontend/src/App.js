import './App.css';
import React from 'react';
import NavBar from './pages/HomePage/NavBar.jsx';
import Footer from './pages/HomePage/Footer.jsx';
import PopUpLogin from './pages/HomePage/PopUpLogin.jsx';
import PopUpCrAcc from './pages/HomePage/PopUpCrAcc.jsx'

function App () {
  return (
    <>
      <NavBar/>
      <div class="mainDiv">
        <PopUpLogin/>
        <PopUpCrAcc/>
      </div>
      <Footer/>
    </>
    
    
  );
}

export default App;
