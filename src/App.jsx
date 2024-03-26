import Home from './components/Home/Home.jsx';
import PokemonEntry from './components/PokemonEntry/PokemonEntry.jsx';
import styles from './App.module.css';
import { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext({});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPokemonShowing, setIsPokemonShowing] = useState(false);
  const [displayPokemonData, setDisplayPokemonData] = useState({});

  useEffect(() => {
    if (isPokemonShowing) {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      // Block scroll when modal is open and maintain scrollbar width
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore scroll when modal is closed
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
  }, [isPokemonShowing]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const closeModal = () => {
    setIsPokemonShowing(false);
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <Home isPokemonShowing={isPokemonShowing} setIsPokemonShowing={setIsPokemonShowing} displayPokemonData={displayPokemonData} setDisplayPokemonData={setDisplayPokemonData}/>
      {isPokemonShowing && (
      <div className={styles.modalBackground} onClick={closeModal}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <PokemonEntry pokemonDataToShow={displayPokemonData} isPokemonShowing={isPokemonShowing} setIsPokemonShowing={setIsPokemonShowing}/>
        </div>
      </div>
    )}
    </div>
  </DarkModeContext.Provider>
}

export default App
