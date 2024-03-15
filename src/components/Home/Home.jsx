import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import styles from './Home.module.css';
import Icon from '../../assets/icons/pokeball.svg';
import { useState, useEffect } from "react";
import LoadingIcon from "../../assets/icons/loading-gif.gif"

const Home = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showedPokemonData, setShowedPokemonData] = useState([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);

  useEffect(() => {
    const getAllPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1024`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
    
        setAllPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getAllPokemonData();
  }, []);

  useEffect(() => {
    const filteredData = allPokemonData.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemonData(filteredData);
  }, [allPokemonData, searchQuery]);

  useEffect(() => {
    setShowedPokemonData(filteredPokemonData.slice(0, 30));
  }, [filteredPokemonData]);

  const handleShowMoreClick = () => {
    const nextPokemonData = filteredPokemonData.slice(
      showedPokemonData.length,
      showedPokemonData.length + 30
    );
    setShowedPokemonData(prevData => [...prevData, ...nextPokemonData]);
  }

  return (
    <main>
      <header className={styles.navbar}> 
        <img src={Icon} className={styles.icon}/>
        <span className={styles.title}>Pokédex</span>
        <input
          type="text"
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          placeholder="Search Pokémon by name"
        />
      </header>
      <section className={styles.cardContainer}>
        {
          showedPokemonData?.map((pokemon, index) => (
            <PokemonCard key={index} pokemonUrl={pokemon.url} />
          ))
        }
      </section>
      {showedPokemonData.length < filteredPokemonData.length && (
        <div className={styles.loadingContainer}>
          <button onClick={handleShowMoreClick}>Load More!</button>
        </div>
      )}
    </main>
  );
}

export default Home;