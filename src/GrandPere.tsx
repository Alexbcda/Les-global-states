import React, { useContext, useState } from 'react';
import { FrereContext } from './FrereContext';
import Pere from './Pere';



const GrandPere: React.FC = () => {
  const prenom = useContext(FrereContext).prenom
  return (
    <div className="GrandPere">
      <h2>GrandPere: {prenom}</h2>
      <Pere />
    </div>
  );
};

export default GrandPere;
