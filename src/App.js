import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () =>
    fetch('https://swapi.py4e.com/api/films')
      .then((res) => res.json())
      .then((res) => {
        const transformedMovies = res.results.map((m) => ({
          id: m.episode_id,
          title: m.title,
          releaseDate: m.release_date,
          openingText: m.opening_crawl,
        }));
        return setMovies(transformedMovies);
      });

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
