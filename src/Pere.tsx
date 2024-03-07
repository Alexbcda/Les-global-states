import React, { useState } from 'react';
import Frere from './Frere';

interface PereProps {
  prenom: string;
  onChangePrenom: (nouveauPrenom: string, niveau: number) => void;
}

const Pere: React.FC<PereProps> = (props) => {
  const [prenom, setPrenom] = useState(props.prenom);

  const handleChangePrenom = (nouveauPrenom: string, niveau: number) => {
    setPrenom(nouveauPrenom);
    props.onChangePrenom(nouveauPrenom, niveau + 1);
  };

  return (
    <div className="Pere">
      <h2>Pere: {prenom}</h2>
      <Frere prenom={prenom} onChangePrenom={handleChangePrenom} />
    </div>
  );
};

export default Pere;
