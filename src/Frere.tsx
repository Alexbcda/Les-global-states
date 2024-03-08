import React, { useState } from "react";
import { userFamilyStore } from "./App";

export default function Frere() {
  const { prenom, setPrenom } = userFamilyStore();
  const [newPrenom, setNewPrenom] = useState<string>(prenom);

  const handleChangePrenom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPrenom(e.target.value);
  };

  const handleUpdatePrenom = () => {
    setPrenom(newPrenom);
  };

  return (
    <div>
      <h1>Frere : {prenom}</h1>
      <input type="text" value={newPrenom} onChange={handleChangePrenom} />
      <button onClick={handleUpdatePrenom}>Mettre à jour le prénom</button>
    </div>
  );
}
