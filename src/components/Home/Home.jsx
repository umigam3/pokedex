import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import styles from './Home.module.css';
import Icon from '../../assets/icons/icon.png';
import { useState, useEffect, useMemo } from "react";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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


  const totalPages = Math.ceil(pokemonData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className={styles.navbar}> 
        <img src={Icon} className={styles.icon}/>
        <span className={styles.title}>Pokédex</span>
      </div>
      <div className={styles.cardContainer}>
        {currentItems?.map((pokemon, index) => (
          <PokemonCard key={index} url={pokemon.url} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>{currentPage}/{totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
