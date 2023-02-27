import { Character } from "../../types";

export default function Card(character: Character) {
  const { id, image, status, name, type, species, gender, origin, location } =
    character;
  return (
    <div
      className="character w-48"
      key={id}
    >
      <img className="w-28" src={image} alt={name} />
      <div>

        <h2>{name}</h2>
        <p>{species}</p>
        <p>{status}</p>
      </div>
      <div>
        <p>{type}</p>
        <p>{gender}</p>
        <p>{origin.name}</p>
        <p>{location.name}</p>
      </div>
    </div>
  );
}
