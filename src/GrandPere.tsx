import React, { useState } from 'react';
import Pere from './Pere';

interface GrandPereProps {
  prenom: string;
  onChangePrenom: (nouveauPrenom: string, niveau: number) => void;
}

const GrandPere: React.FC<GrandPereProps> = (props) => {
  const [prenom, setPrenom] = useState(props.prenom);

  const handleChangePrenom = (nouveauPrenom: string, niveau: number) => {
    setPrenom(nouveauPrenom);
    props.onChangePrenom(nouveauPrenom, niveau + 1);
  };

  return (
    <div className="GrandPere">
      <h2>GrandPere: {prenom}</h2>
      <Pere prenom={prenom} onChangePrenom={handleChangePrenom} />
    </div>
  );
};

export default GrandPere;
