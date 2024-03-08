import { userFamilyStore } from "./App";
import Pere from "./Pere";

export default function GrandPere (){

  const {prenom} = userFamilyStore()



return (

  <div>
    <h1> Grand Père : {prenom}</h1>
  <Pere/>
  </div>
)
}