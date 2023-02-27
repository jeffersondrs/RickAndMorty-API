import Card from "../card/Card-component";
import { Character } from "../../types";

export default function CardList( {characters}: {characters: Character[] | undefined}) {
  return (
    <div className="flex flex-row flex-wrap justify-center py-5">
      {characters?.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            origin={{
              name: character.origin.name,
              url: character.origin.url,
            }}
            location={{
              name: character.location.name,
              url: character.location.url,
            }}
            image={character.image}
          />
        );
      })}
    </div>
  );
}
