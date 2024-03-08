import { userFamilyStore } from "./App";
import GrandPere from "./GrandPere";


export default function ArriereGrandPere (){

  const prenomARG = userFamilyStore().prenom;

  return (
    <div>
      <h1>Arrière Grand Pere: {prenomARG}</h1>
      <GrandPere/>
    </div>
  );
  }