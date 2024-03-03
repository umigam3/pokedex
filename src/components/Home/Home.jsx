import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import styles from './Home.module.css';
import Icon from '../../assets/icons/icon.png';

const Home = () => {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0", true);

  return (
    <div>
      <div className={styles.navBar}> 
        <img src={Icon} className={styles.homeIcon}/>
        <span>Pokédex</span>
      </div>
      <div>
        {data?.map((pokemon, index) => (
          <PokemonCard key={index} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
