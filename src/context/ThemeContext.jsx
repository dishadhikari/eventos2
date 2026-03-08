import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const themes = {
  green: 'theme-green',
  blue: 'theme-blue',
  black: 'theme-black',
  offwhite: 'theme-offwhite',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.blue); // default

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`app-theme-wrapper ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);