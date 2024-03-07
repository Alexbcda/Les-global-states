import React, { useContext, useState } from 'react';

import { FrereContext } from './FrereContext';
import Frere from './Frere';


const Pere: React.FC = () => {
  const prenom = useContext(FrereContext).prenom
  return (
    <div className="Pere">
      <h2>Pere: {prenom}</h2>
      <Frere />
    </div>
  );
};

export default Pere;
