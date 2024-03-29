import React from 'react';
import styles from './Header.module.css';
import PokeballIcon from '../Icons/PokeballIcon.jsx'
import FilterIcon from '../Icons/FilterIcon.jsx'
import SearchIcon from '../Icons/SearchIcon.jsx';
import DarkModeIcon from '../Icons/DarkModeIcon.jsx';
import LightModeIcon from '../Icons/LightModeIcon.jsx';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

const Header = ({ searchQuery, setSearchQuery, selectedType, setSelectedType }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  }

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
        <select id="pokemonType" value={selectedType} onChange={handleTypeChange}>
          <option value="0">All</option>
          <option value="1">Normal</option>
          <option value="2">Fighting</option>
          <option value="3">Flying</option>
          <option value="4">Poison</option>
          <option value="5">Ground</option>
          <option value="6">Rock</option>
          <option value="7">Bug</option>
          <option value="8">Ghost</option>
          <option value="9">Steel</option>
          <option value="10">Fire</option>
          <option value="11">Water</option>
          <option value="12">Grass</option>
          <option value="13">Electric</option>
          <option value="14">Psychic</option>
          <option value="15">Ice</option>
          <option value="16">Dragon</option>
          <option value="17">Dark</option>
          <option value="18">Fairy</option>
        </select>
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
