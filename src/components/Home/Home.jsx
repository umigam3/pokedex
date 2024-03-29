import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import Header from '../Header/Header.jsx'
import styles from './Home.module.css';
import { useState, useEffect } from "react";

const Home = ({ isPokemonShowing, setIsPokemonShowing, displayPokemonData, setDisplayPokemonData }) => {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState(0);
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
    const getAllPokemonDataByType = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
    
        setFilteredPokemonData(data.pokemon);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getAllPokemonDataByType();
  }, [selectedType]);

  useEffect(() => {
    setShowedPokemonData(filteredPokemonData.slice(0, 36));
  }, [filteredPokemonData]);

  const handleShowMoreClick = () => {
    const nextPokemonData = filteredPokemonData.slice(
      showedPokemonData.length,
      showedPokemonData.length + 36
    );
    setShowedPokemonData(prevData => [...prevData, ...nextPokemonData]);
  }

  return (
    <main className={styles.container}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedType={selectedType} setSelectedType={setSelectedType} />
      <section className={styles.cardContainer}>
        {
          showedPokemonData?.map((pokemon, index) => (
            <PokemonCard key={index} pokemonUrl={pokemon.url} isPokemonShowing={isPokemonShowing} setIsPokemonShowing={setIsPokemonShowing} displayPokemonData={displayPokemonData} setDisplayPokemonData={setDisplayPokemonData}/>
          ))
        }
      </section>
      {showedPokemonData.length < filteredPokemonData.length && (
        <div className={styles.loadingContainer}>
          <button className={`${styles.loadMore} ${styles.shine}`} onClick={handleShowMoreClick}>Load more Pokémon</button>
        </div>
      )}
    </main>
  );
}

export default Home;