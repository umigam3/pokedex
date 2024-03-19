import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import PokemonEntry from '../components/PokemonEntry/PokemonEntry.jsx';

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonEntry />} />
      </Routes>
    </Router>
  );
}

export default AppRouting;
