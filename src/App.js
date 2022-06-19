//42e73ede - api key
import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./style/style.css";
import Moviecard from "./components/Moviecard";

const API_URL = "http://www.omdbapi.com?apikey=42e73ede";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const onSearch = (e) => {
    e.preventDefault();
    searchMovies(search);
    setSearch("");
  };

  useEffect(() => {
    searchMovies("marvel");
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <h1>Search Movies</h1>
          <div className="form-group">
            <form onSubmit={onSearch}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="example marvel"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="moviecard">
          <div className="moviecard-container">
            {movies.map((movie) => (
              <Moviecard movie={movie} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
