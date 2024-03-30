import Home from './components/Home/Home.jsx';
import PokemonEntry from './components/PokemonEntry/PokemonEntry.jsx';
import styles from './App.module.css';
import { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext({});

function App() {
  const darkModeFromStorage = localStorage.getItem('darkMode') === 'true';
  const [isDarkMode, setIsDarkMode] = useState(darkModeFromStorage);
  const [isPokemonShowing, setIsPokemonShowing] = useState(false);
  const [displayPokemonData, setDisplayPokemonData] = useState({});

  useEffect(() => {
    if (isPokemonShowing) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
  }, [isPokemonShowing]);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);

    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    console.log(metaThemeColor);
    metaThemeColor.content = isDarkMode ? '#FFFFFF' : '#000000';
  }, [isDarkMode]);
  
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
