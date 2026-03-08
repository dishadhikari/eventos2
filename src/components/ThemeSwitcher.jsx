import React, { useState } from 'react';
import { useTheme, themes } from '../context/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedTheme) => {
    changeTheme(selectedTheme);
    setOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button className="theme-toggle-btn" onClick={() => setOpen(!open)}>
        🎨
      </button>
      {open && (
        <div className="theme-palette">
          <button
            className={`theme-option green ${theme === themes.green ? 'active' : ''}`}
            onClick={() => handleSelect(themes.green)}
          />
          <button
            className={`theme-option blue ${theme === themes.blue ? 'active' : ''}`}
            onClick={() => handleSelect(themes.blue)}
          />
          <button
            className={`theme-option black ${theme === themes.black ? 'active' : ''}`}
            onClick={() => handleSelect(themes.black)}
          />
          <button
            className={`theme-option offwhite ${theme === themes.offwhite ? 'active' : ''}`}
            onClick={() => handleSelect(themes.offwhite)}
          />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;