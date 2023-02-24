import "./App.css";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
};

type pagination = {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
};

type url = {
  url: string;
};

function App() {
  const [page, setPage] = useState<number>(1);

  const [url, setUrl] = useState<url>({
    url: `https://rickandmortyapi.com/api/character?page=${page}`,
  });

  const { data, isLoading, error } = useQuery<Character[], Error>(
    "characters",
    async () => {
      return await fetch(url.url)
        .then((res) => res.json())
        .then((res) => res.results);
    }
  );

  const {
    data: pagination,
    isLoading: paginationIsLoading,
    error: paginationError,
  } = useQuery<pagination, Error>("pagination", async () => {
    return await fetch(url.url)
      .then((res) => res.json())
      .then((res) => res.info);
  });

  useEffect(() => {
    setUrl({
      url: `https://rickandmortyapi.com/api/character?page=${page}`,
    });
  }, [page]);

  const nextPage = () => {
    setPage((prev) => prev++);
  };

  const prevPage = () => {
    setPage((prev) => prev--);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (paginationIsLoading) {
    return <div>Loading...</div>;
  }

  if (paginationError) {
    return <div>Error: {paginationError.message}</div>;
  }

  console.log(pagination?.next);
  console.log(pagination?.prev);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div
        className="characters flex flex-row flex-wrap justify-evenly items-center h-full w-[40%] p-10 bg-gray-200 
      "
      >
        {data?.map((character) => (
          <div
            className="character flex flex-col justify-center items-center p-3 w-48 bg-white shadow-xl rounded-xl m-1"
            key={character.id}
          >
            <img className="w-28" src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.species}</p>

            <p>{character.status}</p>

            <p>{character.gender}</p>

            <p>{character.origin.name}</p>
          </div>
        ))}
      </div>
      {pagination?.prev && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevPage}
        >
          Prev
        </button>
      )}
      {pagination?.next && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default App;
