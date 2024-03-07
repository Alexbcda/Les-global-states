import React, { useContext, useState } from 'react';
import { FrereContext } from './FrereContext';
import Frere from './Frere';
import GrandPere from './GrandPere';


const ArriereGrandPere: React.FC = () => {
  const prenom = useContext(FrereContext).prenom
  return (
    <div className="ArriereGrandPere">
      <h2>GrandPere: {prenom}</h2>
      <GrandPere />
    </div>
  );
};

export default ArriereGrandPere;