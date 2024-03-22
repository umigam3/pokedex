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

export const getBackgroundColorByType = (pokemon) => {
    if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
        return 'lightgray';
    }

    const pokemonType = pokemon.types[0].type.name;

    return TYPECOLORS[pokemonType] || 'lightgray';
};

export const getBackgroundColorByIndividualType = (pokemon, i) => {
    if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
        return 'lightgray';
    }

    let pokemonType = '';
    if (pokemon.types[i]) pokemonType = pokemon.types[i].type.name;

    return TYPECOLORS[pokemonType] || 'lightgray';
};

export const formatName = (name) => {
    if (!name) {
        return ''; 
    }

    return name.charAt(0).toUpperCase() + name.slice(1); 
}

export function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

export function calculatePercetage(number) {
    return (number / 255) * 100;
}

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
    
        // Agrega más casos según sea necesario
        default:
            return name.toUpperCase(); // Por defecto, devuelve el nombre en mayúsculas
    }

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