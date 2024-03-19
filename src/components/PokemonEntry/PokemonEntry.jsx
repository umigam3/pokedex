import React from 'react';
import styles from './PokemonEntry.module.css';
import { useParams } from 'react-router-dom';
import { getBackgroundColorByType, getBackgroundColorByIndividualType, formatName, formatNumber } from '../../utils/pokemonUtils';
import { getPokemonData } from '../../hooks/useFetch';
import { DarkModeContext } from '../../App';
import { useContext } from 'react';
import PokeBallBGIcon from '../../assets/icons/pokeball-card-bg.png';

const PokemonEntry = () => {
  
  const { id } = useParams();

  const { pokemonData } = getPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { isDarkMode } = useContext(DarkModeContext);

  const backgroundColor = getBackgroundColorByType(pokemonData);
  const backgroundColorType1 = getBackgroundColorByIndividualType(pokemonData, 0);
	const backgroundColorType2 = getBackgroundColorByIndividualType(pokemonData, 1);

  return (
    <main style={{ backgroundColor: backgroundColor }}>
      {pokemonData && (
        <section className={styles.container}>
          <div className={styles.pokemonHeader}>
            <header className={styles.pokemonHeaderTop}>
              <h1 className={styles.pokemonName}>{formatName(pokemonData.name)}</h1>
              <h2 className={styles.pokemonId}>#{formatNumber(pokemonData.id)}</h2>
            </header>
            <img className={styles.pokemonSprite} src={pokemonData.sprites.other['home'].front_default} alt={pokemonData.name} loading='lazy' />
            {/* <img className={`${styles.pokemonBackground1} ${styles.pokemonBackground}`} src={PokeBallBGIcon} alt={pokemonData.name}/>
						<img className={`${styles.pokemonBackground2} ${styles.pokemonBackground}`} src={PokeBallBGIcon} alt={pokemonData.name}/>
						<img className={`${styles.pokemonBackground3} ${styles.pokemonBackground}`} src={PokeBallBGIcon} alt={pokemonData.name}/> */}
          </div>
          <div className={`${styles.pokemonInfo} ${isDarkMode ? styles.pokemonInfoDarkMode : ''}`}>
            <div className={styles.pokemonTypes}>
								<span style={{ backgroundColor: backgroundColorType1 }} className={styles.pokemonType}>{formatName(pokemonData.types[0].type.name)}</span>
								{pokemonData.types[1] && <span style={{ backgroundColor: backgroundColorType2 }} className={styles.pokemonType}>{formatName(pokemonData.types[1].type.name)}</span>}
            </div>
          </div>
        </section>
    )}
    </main>
  );
}

export default PokemonEntry;
