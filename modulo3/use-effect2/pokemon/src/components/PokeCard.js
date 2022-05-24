import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect( () => {
      pegaPokemon(props.pokemon)
  }, [])
  console.log("pokemon", pokemon)

  useEffect( () =>{
      pegaPokemon(props.pokemon)
  }, [props.pokemon])
  console.log("props", props)


  let pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(res => {
        // Alteração do estado, armazenando a resposta da requisição solicitada.
        setPokemon(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

 
    return (
      <figure>
       
        <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
        <p>Peso: {pokemon.weight} Kg</p>
        <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </figure>
    );
}    

export default PokeCard;
