import { Character } from "../../types";

export default function Card(character: Character) {
  const { id, image, status, name, type, species, gender, origin, location } =
    character;
  return (
    <div
      className="character flex flex-col justify-center items-center p-3 w-48 bg-white shadow-xl rounded-xl m-1"
      key={id}
    >
      <img className="w-28" src={image} alt={name} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{type}</p>
      <p>{status}</p>
      <p>{gender}</p>
      <p>{origin.name}</p>
      <p>{location.name}</p>
    </div>
  );
}
