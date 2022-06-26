export function PokemonType({ item }) {
  return (
    <li>
      <span className="stat-name">
        <b>{item.type.name} </b>
      </span>
    </li>
  );
}
