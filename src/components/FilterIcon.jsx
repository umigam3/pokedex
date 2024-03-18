import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../App';

const FilterIcon = () => {
    const { isDarkMode } = useContext(DarkModeContext);

	return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={isDarkMode ? "#FFF" : "#2E2E2E"} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 6l8 0" />
            <path d="M16 6l4 0" />
            <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 12l2 0" />
            <path d="M10 12l10 0" />
            <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 18l11 0" />
            <path d="M19 18l1 0" />
        </svg>
    );
}

export default FilterIcon;