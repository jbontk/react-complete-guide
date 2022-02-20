import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.py4e.com/api/films');
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();

      const transformedMovies = data.results.map((m) => ({
        id: m.episode_id,
        title: m.title,
        releaseDate: m.release_date,
        openingText: m.opening_crawl,
      }));
      setMovies(transformedMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
