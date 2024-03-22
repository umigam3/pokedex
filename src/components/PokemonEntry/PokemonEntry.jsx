import React from 'react';
import styles from './PokemonEntry.module.css';
import WeightIcon from '../Icons/WeightIcon.jsx';
import RulerIcon from '../Icons/RulerIcon.jsx';
import { useParams } from 'react-router-dom';
import { getBackgroundColorByIndividualType, formatName, formatNumber } from '../../utils/pokemonUtils';
import { getPokemonData } from '../../hooks/useFetch';
import { DarkModeContext } from '../../App';
import { useContext } from 'react';
import LeftArrowIcon from '../../assets/icons/arrow-left.svg';

const PokemonEntry = () => {
  
  const { id } = useParams();

  const { pokemonData } = getPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { isDarkMode } = useContext(DarkModeContext);

  const backgroundColorType1 = getBackgroundColorByIndividualType(pokemonData, 0);
	const backgroundColorType2 = getBackgroundColorByIndividualType(pokemonData, 1);

  return (
    <main style={{ backgroundColor: backgroundColorType1 }}>
      {pokemonData && (
        <section className={styles.container}>
          <div className={`${styles.pokemonHeader} ${isDarkMode ? styles.DarkMode : ''}`}>
            <header className={styles.pokemonHeaderTop}>
              <img className={styles.backIcon} src={LeftArrowIcon} width="35px"/>
              <h1>{formatName(pokemonData.name)}</h1>
              <h2 className={styles.pokemonId}>#{formatNumber(pokemonData.id)}</h2>
            </header>
            <img className={styles.pokemonSprite} src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} loading='lazy' />
          </div>
          <div className={`${styles.pokemonInfo} ${isDarkMode ? styles.pokemonInfoDarkMode : ''}`}>
            <div className={styles.pokemonTypes}>
								<span style={{ backgroundColor: backgroundColorType1 }} className={styles.pokemonType}>{formatName(pokemonData.types[0].type.name)}</span>
								{pokemonData.types[1] && <span style={{ backgroundColor: backgroundColorType2 }} className={styles.pokemonType}>{formatName(pokemonData.types[1].type.name)}</span>}
            </div>
            <h2 style={{ color: backgroundColorType1 }}>About</h2>
            <aside className={styles.about}>
              <div className={styles.aboutInfo}>
                <WeightIcon />
                <span>{pokemonData.weight}</span>
                <h3>Weight</h3>
              </div>
              <div className={styles.aboutInfo}>
                <RulerIcon />
                <span>{pokemonData.height}</span>
                <h3>Height</h3>
              </div>
            </aside>
            {/* <h2 style={{ color: backgroundColorType1 }}>Stats</h2> */}
          </div>
        </section>
    )}
    </main>
  );
}

export default PokemonEntry;
