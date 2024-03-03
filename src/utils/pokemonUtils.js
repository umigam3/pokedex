export const getBackgroundColorByType = (pokemon) => {
    if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
        return 'lightgray';
    }

    const typeColors = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D02F',
        grass: '#78C84F',
        ice: '#98D7D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0BF69',
        flying: '#A890EF',
        psychic: '#F95888',
        bug: '#A7B820',
        rock: '#B8A037',
        ghost: '#705898',
        dragon: '#7039F8',
        dark: '#705848',
        steel: '#B9B8D0',
        fairy: '#F0B6BD',
        stellar: '#34ACE7',
    };

    const pokemonType = pokemon.types[0].type.name;

    return typeColors[pokemonType] || 'lightgray';
};

export const formatName = (name) => {
    if (!name) {
        return ''; 
    }

    return name.charAt(0).toUpperCase() + name.slice(1); 
}

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