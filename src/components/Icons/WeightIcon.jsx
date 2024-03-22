import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

const WeightIcon = ( { onClick } ) => {
    const { isDarkMode } = useContext(DarkModeContext);

	return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke={isDarkMode ? "#FFF" : "#2E2E2E"}  strokeWidth="1.75"  strokeLinecap="round"  strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
        </svg>
    );
}

export default WeightIcon;