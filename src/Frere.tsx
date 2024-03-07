import React, { useState } from 'react';

interface FrereProps {
  prenom: string;
  onChangePrenom: (nouveauPrenom: string, niveau: number) => void;
}

const Frere: React.FC<FrereProps> = (props) => {
  const [nouveauPrenom, setNouveauPrenom] = useState('');

  const handleChangePrenom = () => {
    if (nouveauPrenom.trim() !== '') {
      props.onChangePrenom(nouveauPrenom, 2); // 2 représente le niveau du GrandPere
      setNouveauPrenom('');
    }
  };

  return (
    <div className="Frere">
      <h2>Frere: {props.prenom}</h2>
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
