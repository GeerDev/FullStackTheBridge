import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Reserve from './components/Reserve/Reserve';

import getMenuItem from './services/getMenuItem';

function App() {

  const[dishes, setDishes]= useState([])

  useEffect(() => {
    getMenuItem().then(dish => setDishes(dish))
  }, []);

  return (
    <>
    <BrowserRouter>
    <Header />
    <div className="container">
    <Routes>
      
        <Route path="/" element=        {
                dishes.map(dish => (
                  <Home
                      key= { dish._id }
                      {...dish}
                  />
                  ))
                } />
        <Route path="/reserva" element={<Reserve />} />
        
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
