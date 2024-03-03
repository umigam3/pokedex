import React from 'react';
import styles from './PokemonCard.module.css';
import loading from '../../assets/icons/ZKZg.gif'
import { getBackgroundColorByType } from '../../utils/pokemonUtils';
import { useFetch } from '../../hooks/useFetch';

const PokemonCard = ({ url }) => {
	const { data } = useFetch(url, false);
	const backgroundColor = getBackgroundColorByType(data);

  return (
    <div className={styles.cardContainer}>
			{data ? (
				<div style={{ backgroundColor }} className={styles.pokemonCard}>
					<div className={styles.pokemonInfo}>
						<p>{data.name}</p>
						<p>#{data.id}</p>
					</div>
					<div className={styles.pokemonImage}>
						<img src={data.sprites.other['official-artwork'].front_default} alt={data.name} height='100px'/>
					</div>
				</div>
			) : (
				<img className={styles.loadingIcon} src={loading} />
			)}
    </div>
  );
}

export default PokemonCard;
