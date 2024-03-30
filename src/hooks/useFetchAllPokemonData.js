import { useState, useEffect } from "react";

const useFetchAllPokemonData = () => {
  const [loading, setLoading] = useState(true);
  const [allPokemonData, setAllPokemonData] = useState([]);

  useEffect(() => {
    const getAllPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
    
        setAllPokemonData(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getAllPokemonData();
  }, []);

  return { loading, allPokemonData };
};

export default useFetchAllPokemonData;