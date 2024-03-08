import Frere from './Frere';
import { userFamilyStore } from './App';

export default function Pere () {
const PrenomP = userFamilyStore ().prenom
  
return (
    <div>
      <h1> Père : {PrenomP} </h1>
      <Frere/>
      </div>
  );
}