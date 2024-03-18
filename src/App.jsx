import AppRouting from './routes/AppRouting.jsx';
import styles from './App.module.css';
import { createContext, useState } from 'react';

export const DarkModeContext = createContext({});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <AppRouting />
    </div>
  </DarkModeContext.Provider>
}

export default App
