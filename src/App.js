import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Wrapping inside useCallback to ensure the function is not re-created unnecessarily
  // , therefore avoiding an infinite loop with the useEffect that comes next which uses
  // it as a dependency.
  const fetchMoviesHandler = useCallback(async () =>  {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.py4e.com/api/films'); // original: https://swapi.dev/api/films => but the SSL certificate is invalid
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
  }, []);

  // Need to use fetchMoviesHandler as a dependency (rather than [] which would only call it once),
  // because that handler could depend on external state (e.g. an argument), which could change
  // hence requiring to re-evaluate that function again.
  // 
  // useEffect needs to be moved after the handler, because fetchMoviesHandler is not declared as a
  // function therefore hoisting won't work.
  useEffect(() => fetchMoviesHandler(), [fetchMoviesHandler]);


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
