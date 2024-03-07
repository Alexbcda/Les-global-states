import React, { useState } from 'react';
import GrandPere from './GrandPere';


interface ArriereGrandPereProps {
  prenom: string;
  onChangePrenom: (nouveauPrenom: string, niveau: number) => void;
}

const ArriereGrandPere: React.FC<GrandPereProps> = (props) => {
  const [prenom, setPrenom] = useState(props.prenom);

  const handleChangePrenom = (nouveauPrenom: string, niveau: number) => {
    setPrenom(nouveauPrenom);
    props.onChangePrenom(nouveauPrenom, niveau + 1);
  };

  return (
    <div className="ArriereGrandPere">
      <h2>GrandPere: {prenom}</h2>
      <GrandPere prenom={prenom} onChangePrenom={handleChangePrenom} />
    </div>
  );
};

export default ArriereGrandPere;