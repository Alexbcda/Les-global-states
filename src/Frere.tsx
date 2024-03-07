import React, { useContext, useState } from 'react';
import { FrereContext } from './FrereContext';

const Frere: React.FC = () => {
  const { prenom, changePrenom } = useContext(FrereContext);
  const [nouveauPrenom, setNouveauPrenom] = useState('');

  const handleChangePrenom = () => {
    if (nouveauPrenom.trim() !== '') {
      changePrenom(nouveauPrenom);
      setNouveauPrenom('');
    }
  };

  return (
    <div className="Frere">
      <h2>Frere: {prenom}</h2>
      <label>
        Nouveau prénom:
        <input
          type="text"
          value={nouveauPrenom}
          onChange={(e) => setNouveauPrenom(e.target.value)}
        />
      </label>
      <button onClick={handleChangePrenom}>Changer le prénom</button>
    </div>
  );
};

export default Frere;
