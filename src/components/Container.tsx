// Container.tsx
import React from 'react';
import { useThemeStore } from '../stores/ThemeStore';
import Card from './Card';

function Container() {
  const { theme } = useThemeStore();

  const containerStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#000' : '#FFF',
    color : theme === 'light' ? '#FFF' : '#000',
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <h2>Container</h2>
      <Card/>
    </div>
  );
}

export default Container;
