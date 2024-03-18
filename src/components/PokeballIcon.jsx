import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../App';

const PokeBallIcon = () => {
    const { isDarkMode } = useContext(DarkModeContext);

	return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            style={{ 
                transition: 'stroke 1s ease', 
                width: '40px', 
                marginRight: '10px' }} 
            width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke={isDarkMode ? "#FFF" : "#2E2E2E"} fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M3 12h6" />
            <path d="M15 12h6" />
        </svg>	
    );
}

export default PokeBallIcon;