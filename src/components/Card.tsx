// Card.tsx
import React from 'react';


import useThemeStore from '../stores/ThemeStore';
import Button from './bouton';

function Card() {
  const { theme } = useThemeStore();

  const cardStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color : theme === 'light' ? '#000' : '#fff',
    padding: '30px',
    borderLeft: theme === 'light' ? '30px solid #000' : '30px solid #fff',
    margin: '10px',
    borderRadius: '4px',

  };

  return (
    <div style={cardStyle}>
      <h3>Card</h3>
      <Button />
    </div>
  );
}

export default Card;
