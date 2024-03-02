import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        <li>
          {data?.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Home;
