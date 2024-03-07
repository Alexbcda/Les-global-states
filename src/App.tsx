import React, { useState } from 'react';
import ArriereGrandPere from './ArriereGrandPere';
import { FrereContext } from './FrereContext';
import GrandPere from './GrandPere';
import Pere from './Pere';


const App: React.FC = () => {
  const [prenomDeLaFamille, setNouveauPrenom] = useState("Patate"); 

  return (
    <div className="App">
      <FrereContext.Provider value={{
        prenom: prenomDeLaFamille,
        changePrenom: setNouveauPrenom
      }}>
        <ArriereGrandPere />
      </FrereContext.Provider>
    </div>
  );
}

export default App;
