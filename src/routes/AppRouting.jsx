import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import PokemonInfo from '../components/PokemonInfo/PokemonInfo.jsx';

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonInfo />} />
      </Routes>
    </Router>
  );
}

export default AppRouting;
