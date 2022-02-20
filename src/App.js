import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.py4e.com/api/films');
    const data = await response.json();

    const transformedMovies = data.results.map((m) => ({
      id: m.episode_id,
      title: m.title,
      releaseDate: m.release_date,
      openingText: m.opening_crawl,
    }));
    setMovies(transformedMovies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies to display.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
