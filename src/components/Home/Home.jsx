import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import styles from './Home.module.css';
import Icon from '../../assets/icons/pokeball.svg';
import { useState, useEffect } from "react";
import LoadingIcon from "../../assets/icons/loading-gif.gif"

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1024');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
    
        // Obtener información de cada Pokémon
        const pokemonPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const pokemonData = await pokemonResponse.json();
          return pokemonData;
        });
    
        // Esperar a que se completen todas las llamadas y luego guardar los datos en un array
        const pokemonInfo = await Promise.all(pokemonPromises);
        setPokemonData(pokemonInfo);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    let timeoutId;

      timeoutId = setTimeout(() => {
        setIsLoading(false); // Desactivar isLoading después de 2 segundos
      }, 1000);


    return () => clearTimeout(timeoutId); // Limpiar el temporizador en cada cambio de búsqueda
  }, [searchQuery]);


  const filteredPokemonData = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <img src={LoadingIcon} className={styles.loading}/>
          </div>
        ) : (
          filteredPokemonData?.map((pokemon, index) => (
            <PokemonCard key={index} pokemonData={pokemon} />
          ))
        )}
      </section>
    </main>
  );
}

export default Home;
