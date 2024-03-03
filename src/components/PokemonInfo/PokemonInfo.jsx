import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfo = (props) => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Detalles del Pokémon</h2>
      <p>ID: {id}</p>
    </div>
  );
}

export default PokemonInfo;
