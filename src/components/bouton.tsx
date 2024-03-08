// Button.tsx
import React from 'react';
import { useThemeStore } from '../stores/ThemeStore';


function Button() {
  const { theme, toggleTheme } = useThemeStore();

  const buttonStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#000' : '#FFFFFF',
    color: theme === 'light' ? '#fff' : '#000',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Changer le Theme
    </button>
  );
}

export default Button;
