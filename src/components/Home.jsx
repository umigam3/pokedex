import React from 'react';
import { useFetch } from '../hooks/useFetch';
import PokemonCard from '../components/PokemonCard.jsx';

const Home = () => {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0", true);

  return (
    <div>
      <h1>Pokédex</h1>
      <div>
        {data?.map((pokemon, index) => (
          <PokemonCard key={index} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
