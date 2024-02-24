import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );
    // const json = await response.json();
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          <h1>git test</h1>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={`${movie.medium_cover_image}`} alt='No Image' />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
