import React from 'react';
import styles from './PokemonCard.module.css';
import loading from '../../assets/icons/ZKZg.gif'
import { getBackgroundColorByType, formatName, formatNumber } from '../../utils/pokemonUtils';
import { useFetch } from '../../hooks/useFetch';

const PokemonCard = ({ url }) => {
	const { data } = useFetch(url, false);

    const backgroundColor = getBackgroundColorByType(data);

	return (
		<div className={styles.cardContainer}>
				{data ? (
					<div style={{backgroundColor}} className={styles.pokemonCard}>
						<div className={styles.pokemonDetails}>
							<div className={styles.pokemonInfo}>
								<span>#{formatNumber(data.id)}</span>
								<span>{formatName(data.name)}</span>
							</div>
							<div className={styles.pokemonTypes}>
								<span>{formatName(data.types[0].type.name)}</span>
								{data.types[1] && <span>{formatName(data.types[1].type.name)}</span>}
							</div>
						</div>
						<div className={styles.pokemonImage}>
							<img src={data.sprites.other['official-artwork'].front_default} alt={data.name} height='100px'/>
						</div>
					</div>
				) : (
					<p></p>
					// <img className={styles.loadingIcon} src={loading} />
				)}
		</div>
	);
}

export default PokemonCard;
