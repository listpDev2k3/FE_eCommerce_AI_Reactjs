import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Header from './components/Header/Header'; // tùy theo bạn để ở đâu

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
       
      </Routes>
    </div>
  );
};

export default App;