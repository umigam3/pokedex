import Home from './components/Home/Home.jsx';
import PokemonEntry from './components/PokemonEntry/PokemonEntry.jsx';
import styles from './App.module.css';
import { createContext, useState } from 'react';

export const DarkModeContext = createContext({});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPokemonShowing, setIsPokemonShowing] = useState(false);
  const [displayPokemonData, setDisplayPokemonData] = useState({});

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <Home isPokemonShowing={isPokemonShowing} setIsPokemonShowing={setIsPokemonShowing} displayPokemonData={displayPokemonData} setDisplayPokemonData={setDisplayPokemonData}/>
      {isPokemonShowing && (
      <div className={styles.modalBackground}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <PokemonEntry pokemonDataToShow={displayPokemonData} isPokemonShowing={isPokemonShowing} setIsPokemonShowing={setIsPokemonShowing}/>
        </div>
      </div>
    )}
    </div>
  </DarkModeContext.Provider>
}

export default App
