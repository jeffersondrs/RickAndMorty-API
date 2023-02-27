import "./App.css";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { Character, Url } from "./types";
import CardList from "./components/card-list/Card-list";
import SearchBox from "./components/search-box/Search.componet";

function App() {
  const [searchField, setSearchField] = useState("");
  const [chars, setChars] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(chars);
  const [url, setUrl] = useState<Url>({
    url: `https://rickandmortyapi.com/api/character?page=1`,
  });

  const { data, isLoading, error } = useQuery<[], Error>(
    "characters",
    async () => {
      return await fetch(url.url)
        .then((res) => res.json())
        .then((res) => res.results)
        .then((res) => {
          setChars(res);
          return res;
        });
    }
  );
  useEffect(() => {
    const filterMonsters = chars.filter((char: Character) => {
      return char.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(filterMonsters);
  }, [chars, searchField]);

  const onSearchChange = (event: { target: { value: string } }) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <div>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder="Seach Monster"
        />
        <CardList characters={filterMonsters} />
      </div>
    </div>
  );
}

export default App;
