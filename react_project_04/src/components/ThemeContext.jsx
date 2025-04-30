// src/context/ThemeContext.jsx
import { createContext, useContext, useState } from "react";
import React from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


export const ThemeToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        width: 80,
        height: 30,
        borderRadius: '10%',
        background: isDarkTheme ? '#333' : '#eee',
        color: isDarkTheme ? 'white' : 'black',
        border:'none',
      }}
    >
      {isDarkTheme ? 'Light' : 'Dark'}
    </button>
  );
};
