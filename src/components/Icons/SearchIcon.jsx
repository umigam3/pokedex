import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

const SearchIcon = () => {
    const { isDarkMode } = useContext(DarkModeContext);

	return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokWidth="3" 
            style={{ 
                position: 'absolute',
                right: '10px',
                bottom: '8px',
                width: '20px'
            }} 
            stroke={isDarkMode ? "#FFF" : "#2E2E2E"} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>	
    );
}

export default SearchIcon;