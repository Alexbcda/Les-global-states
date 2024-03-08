import ArriereGrandPere from './ArriereGrandPere';
import {create} from 'zustand'


interface FamilyState {
prenom: string;
setPrenom: (newPrenom: string) => void;
}

export const userFamilyStore  = create <FamilyState>((set) => ({
  prenom: "Jean",
  setPrenom: (newPrenom) => set ((state) => ({prenom : newPrenom})),
}));

function App () {
  return (
    <>
    <ArriereGrandPere/>
    </>
  );
}

export default App;