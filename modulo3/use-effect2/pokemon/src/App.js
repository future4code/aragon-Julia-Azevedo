import React, { useEffect, useState} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

function App(){
const [pokeList, setPokeList] = useState([]);
const [pokeName, setPokeName] = useState("")
  

useEffect( () => {
  axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(res => {
        // Alteração do estado, armazenando a resposta da requisição solicitada.
        setPokeList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
}, [])

  let changePokeName = (event) => {
    setPokeName(event.target.value );
  };
 
    return (
     <div className="App">
       <h1>Escolha um Pokémon</h1>
       <select onChange={changePokeName}>
         <option value={""}>Nenhum</option>
         {pokeList.map(pokemon => {
           return (
             <option key={pokemon.name} value={pokemon.name}>
               {pokemon.name}
             </option>
           );
        })}
       </select>
       {pokeName && <PokeCard pokemon={pokeName} />}
     </div>
    );
 
}    

export default App;

