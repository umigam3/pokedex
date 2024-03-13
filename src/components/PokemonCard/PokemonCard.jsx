import React from 'react';
import styles from './PokemonCard.module.css';
import PokeBall from '../../assets/icons/pokeball-background.png'
import { getBackgroundColorByType, formatName, formatNumber } from '../../utils/pokemonUtils';

const PokemonCard = ({ pokemonData }) => {

  	const backgroundColor = getBackgroundColorByType(pokemonData);

	return (
		<div className={styles.cardContainer}>
				{pokemonData ? (
					<div style={{backgroundColor}} className={styles.pokemonCard}>
						<div className={styles.pokemonDetails}>
							<div className={styles.pokemonInfo}>
								<span className={styles.pokemonId}>#{formatNumber(pokemonData.id)}</span>
								<span>{formatName(pokemonData.name)}</span>
							</div>
							<div>
								<span className={styles.pokemonType}>{formatName(pokemonData.types[0].type.name)}</span>
								{pokemonData.types[1] && <span className={styles.pokemonType}>{formatName(pokemonData.types[1].type.name)}</span>}
							</div>
						</div>
						<div className={styles.pokemonImage}>
							<img className={styles.pokemonImageTest} src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} loading='lazy' />
						</div>
						<img className={styles.pokemonBackground} src={PokeBall} alt={pokemonData.name}/>
					</div>
				) : (
					<img className={styles.loadingIcon} src={loading} />
				)}
		</div>
	);
}

export default PokemonCard;
