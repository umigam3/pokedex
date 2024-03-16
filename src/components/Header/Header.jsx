import React from 'react';
import Icon from '../../assets/icons/pokeball.svg';
import DarkIcon from '../../assets/icons/dark.svg';
import SearchIcon from '../../assets/icons/search.svg';
import FilterIcon from '../../assets/icons/filter.svg'
import styles from './Header.module.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Icon} className={styles.icon} alt="Pokeball Icon" />
        <span className={styles.title}>Pokédex</span>
      </div>
      <div className={styles.options}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
          />
          <img className={styles.searchIcon} src={SearchIcon} alt="Search Icon" />
        </div>
        <img className={styles.navIcon} src={FilterIcon} alt="Filter" />
        <img className={styles.navIcon} src={DarkIcon} alt="Dark Mode Icon" />
      </div>
    </header>
  );
};

export default Header;
