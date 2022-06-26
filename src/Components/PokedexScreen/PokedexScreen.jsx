import { Stat } from "../Stat";
import { PokemonType } from "../PokemonType";
import ErrorPokemon from "../../img/error.gif";
import LoadingPokemon from "../../img/loading.gif";
export function PokedexScreen({ pokemon, loading, error }) {
  if (error) {
    return (
      <div className="pokedex-screen">
        <img
          src={ErrorPokemon}
          alt="Hubo un error buscando tu pokemon"
          className="pokedex-no-screen"
        />
      </div>
    );
  }
  return (
    <div className="pokedex-screen">
      {!pokemon || loading ? (
        <img
          src={LoadingPokemon}
          alt="Aun no hay ningun pokemon"
          className="pokedex-no-screen"
        />
      ) : (
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            className="pokemon-img"
            src={
              pokemon.sprites.front_shiny
                ? pokemon.sprites.front_shiny
                : pokemon.sprites.front_default
            }
            alt={pokemon.name}
          />
          <ul className="pokemon-stats">
            {pokemon.stats.map((item) => (
              <Stat key={item.stat.name} item={item} />
            ))}
            {pokemon.types.map((item, index) => (
              <PokemonType key={index} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
