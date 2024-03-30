import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

function ScrollTopIcon() {
  const { isDarkMode } = useContext(DarkModeContext);

  const strokeColor = isDarkMode ? '#161616' : '#F2F2F2';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );
}

export default ScrollTopIcon;