import React from 'react';
import styles from './PokemonCard.module.css';
import PokeBall from '../../assets/icons/pokeball-card-bg.png'
import { getBackgroundColorByType, getBackgroundColorByIndividualType, formatName, formatNumber } from '../../utils/pokemonUtils';
import { getPokemonData } from '../../hooks/useFetch';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';
import { useNavigate, Link } from 'react-router-dom';


const PokemonCard = ({ pokemonUrl }) => {
	const navigate = useNavigate();

	const { pokemonData } = getPokemonData(pokemonUrl);
	const { isDarkMode } = useContext(DarkModeContext);

    const backgroundColor = !isDarkMode ? getBackgroundColorByType(pokemonData) : 'transparent';
	const backgroundColorType1 = getBackgroundColorByIndividualType(pokemonData, 0);
	const backgroundColorType2 = getBackgroundColorByIndividualType(pokemonData, 1);

	return (
		<div className={styles.cardContainer}>
				{pokemonData && (
					<Link to={`/pokemon/${pokemonData.id}`} style={{ backgroundColor: backgroundColor }} className={`${styles.pokemonCard} ${isDarkMode ? styles.pokemonCardDarkMode : ''}`}>
						<div className={styles.pokemonDetails}>
							<div className={styles.pokemonInfo}>
								<span className={styles.pokemonId}>#{formatNumber(pokemonData.id)}</span>
								<span className={styles.pokemonName}>{formatName(pokemonData.name)}</span>
							</div>
							<div>
								<span style={isDarkMode ? { borderBottom: `2px solid ${backgroundColorType1}` } : { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px' }} className={styles.pokemonType}>{formatName(pokemonData.types[0].type.name)}</span>
								{pokemonData.types[1] && <span style={isDarkMode ? { borderBottom: `2px solid ${backgroundColorType2}` } : { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px' }} className={styles.pokemonType}>{formatName(pokemonData.types[1].type.name)}</span>}
							</div>
						</div>
						<div className={styles.pokemonImage}>
							{/* <img className={styles.pokemonImageSprite} src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} loading='lazy' /> */}
							<img className={styles.pokemonImageSprite} src={pokemonData.sprites.other['home'].front_default} alt={pokemonData.name} loading='lazy' />
						</div>
						<img className={`${styles.pokemonBackground} ${isDarkMode ? styles.pokemonBackgroundDarkMode : ''}`} src={PokeBall} alt={pokemonData.name}/>
					</Link>
				)}
		</div>
	);
}

export default PokemonCard;