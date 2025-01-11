import React, { useEffect, useState } from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImage(data.sprites.front_default);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPokemonData();
  }, [url]);

  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
