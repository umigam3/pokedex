import React from 'react';
import { useFetch } from '../hooks/useFetch';

const PokemonCard = ({ url }) => {
	const { data } = useFetch(url, false);

  return (
    <div>
        {data ? (
					<div>
							<img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
							<p>{data.name}</p>
							<p>#{data.id}</p>
					</div>
				) : (
					<p>Loading...</p>
				)}
    </div>
  );
}

export default PokemonCard;
