// Define colors for different Pokemon types.
const TYPECOLORS = {
	normal: '#B8B19D',
	fire: '#FF9F6A',
	water: '#6C95D6',
	electric: '#ECD05B',
	grass: '#69D167',
	ice: '#7FDADA',
	fighting: '#C4594B',
	poison: '#8F3E8F',
	ground: '#D9B64E',
	flying: '#9B82E0',
	psychic: '#FF719D',
	bug: '#9FAE5F',
	rock: '#D6B174',
	ghost: '#625462',
	dragon: '#6137E5',
	dark: '#625648',
	steel: '#AFAEBF',
	fairy: '#F297AB',
	stellar: '#00B5FF',
};

// Function to get background color based on the primary type of a Pokemon.
export const getBackgroundColorByType = (pokemon) => {
	if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
		return 'lightgray';
	}

	const pokemonType = pokemon.types[0].type.name;

	return TYPECOLORS[pokemonType] || 'lightgray';
};

// Function to get background color based on an individual type of a Pokemon.
export const getBackgroundColorByIndividualType = (pokemon, i) => {
	if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
		return 'lightgray';
	}

	let pokemonType = '';
	if (pokemon.types[i]) pokemonType = pokemon.types[i].type.name;

	return TYPECOLORS[pokemonType] || 'lightgray';
};

// Function to format name by capitalizing the first letter.
export const formatName = (name) => {
	if (!name) {
		return ''; 
	}

	return name.charAt(0).toUpperCase() + name.slice(1); 
}

// Function to convert hexadecimal color to RGB format.
export function hexToRgb(hex) {
	const bigint = parseInt(hex.substring(1), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return `${r}, ${g}, ${b}`;
}

// Function to calculate percentage based on a number.
export function calculatePercetage(number) {
	return (number / 255) * 100;
}

// Function to format the name of a stat.
export const formatStatName = (name) => {
	if (!name) {
		return ''; 
	}
	
	switch (name) {
		case 'hp':
			return 'HP';
		case 'attack':
			return 'ATK';
		case 'defense':
			return 'DEF';
		case 'special-attack':
			return 'SATK';
		case 'special-defense':
			return 'SDEF';
		case 'speed':
			return 'SPD';

		default:
			return name.toUpperCase();
	}
}

// Function to format a number (e.g., 1 => 001)
export const formatNumber = (id) => {
	if (!id) {
		return ''; 
	}

	const numberString = String(id);
	
	if (numberString.length > 3) {
		return numberString;
	}
	
	return numberString.padStart(3, '0');
}

// Function to format weight in kilograms.
export const formatWeight = (weight) => {
	if (!weight) {
		return ''; 
	}

	const formattedWeight = weight / 10 + ' kg';

	return formattedWeight;
}

// Function to format height in meters.
export const formatHeight = (height) => {
	if (!height) {
		return ''; 
	}

	const formattedHeight = height / 10 + ' m';

	return formattedHeight;
}