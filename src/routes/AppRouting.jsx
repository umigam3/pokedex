import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home.jsx';
import PokemonInfo from '../components/PokemonInfo.jsx';

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
