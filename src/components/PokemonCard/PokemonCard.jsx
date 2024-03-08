import React from 'react';
import styles from './PokemonCard.module.css';
import PokeBall from '../../assets/icons/pokeball-background.png'
import { getBackgroundColorByType, formatName, formatNumber } from '../../utils/pokemonUtils';
import { useFetch } from '../../hooks/useFetch';

const PokemonCard = ({ url }) => {
	const { data } = useFetch(url);

  const backgroundColor = getBackgroundColorByType(data);

	return (
		<div className={styles.cardContainer}>
				{data ? (
					<div style={{backgroundColor}} className={styles.pokemonCard}>
						<div className={styles.pokemonDetails}>
							<div className={styles.pokemonInfo}>
								<span className={styles.pokemonId}>#{formatNumber(data.id)}</span>
								<span>{formatName(data.name)}</span>
							</div>
							<div>
								<span className={styles.pokemonType}>{formatName(data.types[0].type.name)}</span>
								{data.types[1] && <span className={styles.pokemonType}>{formatName(data.types[1].type.name)}</span>}
							</div>
						</div>
						<div className={styles.pokemonImage}>
							<img src={data.sprites.other['official-artwork'].front_default} alt={data.name} height='100px' loading='lazy'/>
						</div>
						<img className={styles.pokemonBackground} src={PokeBall} alt={data.name} height='100px'/>
					</div>
				) : (
					<p></p>
					// <img className={styles.loadingIcon} src={loading} />
				)}
		</div>
	);
}

export default PokemonCard;
