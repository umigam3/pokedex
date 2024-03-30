import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import Header from '../Header/Header.jsx'
import styles from './Home.module.css';
import useFetchAllPokemonData from '../../hooks/useFetchAllPokemonData.js';
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from '../../App';

const Home = ({ isPokemonShowing, setIsPokemonShowing, displayPokemonData, setDisplayPokemonData }) => {
  // Using the useFetchAllPokemonData hook to get all Pokémon data.
  const { loading, allPokemonData } = useFetchAllPokemonData();
  // States for search, selected type, showed data, and filtered data.
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState(0);
  const [showedPokemonData, setShowedPokemonData] = useState([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);
  const [filteredPokemonDataType, setFilteredPokemonDataType] = useState([]);
  // Accessing the DarkModeContext to determine if dark mode is enabled.
	const { isDarkMode } = useContext(DarkModeContext);

  // Effect to assign filtered data when all Pokémon data is received.
  useEffect(() => {
    if (!loading) {
      setFilteredPokemonDataType(allPokemonData);
    }
  }, [loading, allPokemonData]);

  // Effect to get Pokémon data based on the selected type
  useEffect(() => {
    if (selectedType != 0) {
      const getAllPokemonDataByType = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
      
          setFilteredPokemonDataType(data.pokemon.map(pokemon => pokemon.pokemon));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      getAllPokemonDataByType();
    } else {
      setFilteredPokemonDataType(allPokemonData);
    }
  }, [selectedType]);

  // Effect to filter Pokémon based on search query.
  useEffect(() => {
    const filteredData = filteredPokemonDataType.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemonData(filteredData);
  }, [searchQuery, filteredPokemonDataType]);

  // Effect to show only a limited number of Pokémon.
  useEffect(() => {
    setShowedPokemonData(filteredPokemonData.slice(0, 52));
  }, [filteredPokemonData]);

  // Function to load more Pokémon when the button is clicked.
  const handleShowMoreClick = () => {
    const nextPokemonData = filteredPokemonData.slice(
      showedPokemonData.length,
      showedPokemonData.length + 52
    );
    setShowedPokemonData(prevData => [...prevData, ...nextPokemonData]);
  }

  // Rendering the main component.
  return (
    <main className={styles.container}>
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
      />
      <section className={styles.cardContainer}>
      {
        showedPokemonData.length > 0 ? (
          showedPokemonData.map((pokemon, index) => (
            <PokemonCard 
              key={index} 
              pokemonUrl={pokemon.url} 
              setIsPokemonShowing={setIsPokemonShowing} 
              setDisplayPokemonData={setDisplayPokemonData}
            />
          ))
        ) : (
          <div className={styles.pokemonNotFound}>
            <p>No Pokémons Found</p>
          </div>
        )
      }          
      </section>
      {showedPokemonData.length < filteredPokemonData.length && (
        <div className={styles.loadingContainer}>
          <button className={`${styles.loadMore} ${isDarkMode ? styles.loadMoreDarkMode : ''}`} onClick={handleShowMoreClick}>Load more Pokémon</button>
        </div>
      )}
    </main>
  );
}

export default Home;