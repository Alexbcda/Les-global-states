import React, { useState } from 'react';
import ArriereGrandPere from './ArriereGrandPere';

const App: React.FC = () => {
  const [prenomDeLaFamille] = useState("Geoffroy"); 

  return (
    <div className="App">
      <ArriereGrandPere prenom={prenomDeLaFamille} />
    </div>
  );
}

export default App;
