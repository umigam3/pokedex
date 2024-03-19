import React from 'react';
import styles from './Header.module.css';
import PokeballIcon from '../Icons/PokeballIcon.jsx'
import FilterIcon from '../Icons/FilterIcon.jsx'
import SearchIcon from '../Icons/SearchIcon.jsx';
import DarkModeIcon from '../Icons/DarkModeIcon.jsx';
import LightModeIcon from '../Icons/LightModeIcon.jsx';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

const Header = ({ searchQuery, setSearchQuery }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`${styles.navbar} ${isDarkMode ? styles.darkMode : styles.lightMode}`} >
      <div className={styles.logo}>
        <PokeballIcon />
        <span className={styles.title}>Pokédex</span>
      </div>
      <div className={styles.options}>
        <div className={styles.searchBox}>
          <input
            className={`${styles.searchInput} ${isDarkMode ? styles.searchInputDarkMode : ''}`}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
          />
          <SearchIcon />
        </div>
        {isDarkMode ? (
            <LightModeIcon onClick={toggleDarkMode}/>
          ) : (
            <DarkModeIcon onClick={toggleDarkMode}/>
          )
        }
      </div>
    </header>
  );
};

export default Header;
