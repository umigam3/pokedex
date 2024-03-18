import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import styles from './Header.module.css';
import PokeballIcon from '../PokeballIcon.jsx'
import FilterIcon from '../FilterIcon.jsx'
import DarkModeIcon from '../DarkModeIcon.jsx';
import LightModeIcon from '../LightModeIcon.jsx';
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
          <img className={styles.searchIcon} src={SearchIcon} alt="Search Icon" />
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
