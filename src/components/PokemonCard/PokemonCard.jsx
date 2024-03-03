import React from 'react';
import styles from './PokemonCard.module.css';
import { getBackgroundColorByType } from '../../utils/pokemonUtils';
import { useFetch } from '../../hooks/useFetch';

const PokemonCard = ({ url }) => {
	const { data } = useFetch(url, false);
	const backgroundColor = getBackgroundColorByType(data);

  return (
    <div>
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
				<p>Loading...</p>
			)}
    </div>
  );
}

export default PokemonCard;
