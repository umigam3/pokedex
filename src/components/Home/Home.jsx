import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import styles from './Home.module.css';
import Icon from '../../assets/icons/icon.png';
import { useState, useEffect, useMemo } from "react";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...")
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredPokemonData = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPokemonData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPokemonData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className={styles.navbar}> 
        <img src={Icon} className={styles.icon}/>
        <span className={styles.title}>Pokédex</span>
        <input
          type="text"
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          placeholder="Search Pokémon by name"
        />
      </div>
      <div className={styles.cardContainer}>
        {currentItems?.map((pokemon, index) => (
          <PokemonCard key={index} url={pokemon.url} />
        ))}
      </div>
      {totalPages > 1 && 
        <div className={styles.pagination}>
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          <span>{currentPage}/{totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>      
      }
    </div>
  );
}

export default Home;
