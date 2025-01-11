import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCardPage/PokemonCard";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
        const data = await response.json();
        setPokemons(data.results);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPokemons();
  }, []);
  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default App;
