import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../components/MoviesComponents/MovieList';
import { SearchBox } from '../components/MoviesComponents/SearchBox';

import { ErrorHTML } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const abortController = new AbortController();
    if (!query) return;

    fetchMovies(query, abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [query]);

  const fetchMovies = async (query, abortSignal) => {
    try {
      const movies = await helpers.fetchMovies(query, abortSignal);

      if (!movies.length) {
        throw new Error('No movies');
      }

      setMovies(movies);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleQueryUpdate = query => {
    setSearchParams(query.trim() !== '' ? { query } : {});
    setMovies([]);
  };

  return (
    <section>
      <SearchBox query={query} onChange={handleQueryUpdate} />

      {error ? <ErrorHTML>{error}</ErrorHTML> : <MovieList movies={movies} />}
    </section>
  );
};

export default Movies;
