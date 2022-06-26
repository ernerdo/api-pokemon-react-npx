import { useState } from "react";
export function PokemonForm({ setPokemonId, setLoading, setError }) {
  const [pokemon, setPokemon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemon !== "") {
      setError(false);
      setLoading(true);
      const pokemonID = window.isNaN(parseInt(pokemon))
        ? pokemon.toLowerCase()
        : pokemon;
      setPokemonId(pokemonID);
      setPokemon("");
      return;
    }
  };

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Search pokemon by # or name"
        onChange={(e) => setPokemon(e.target.value)}
        autoComplete="off"
      />
      <input type="submit" className="pokemon-btn" value="" />
    </form>
  );
}
