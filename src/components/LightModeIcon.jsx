import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../App';

const LightModeIcon = ( { onClick } ) => {
    const { isDarkMode } = useContext(DarkModeContext);

	return (
        <svg onClick={onClick} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.5" stroke={isDarkMode ? "#FFF" : "#2E2E2E"} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
            <path d="M6.343 17.657l-1.414 1.414" />
            <path d="M6.343 6.343l-1.414 -1.414" />
            <path d="M17.657 6.343l1.414 -1.414" />
            <path d="M17.657 17.657l1.414 1.414" />
            <path d="M4 12h-2" />
            <path d="M12 4v-2" />
            <path d="M20 12h2" />
            <path d="M12 20v2" />
        </svg>
    );
}

export default LightModeIcon;