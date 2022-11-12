import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../components/MovieList';
import { SearchBox } from '../components/SearchBox';
// import { getMovies } from '../helpers';

export const Movies = () => {
  // const movies = getMovies();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';

  // const visibleProducts = movies.filter(movie =>
  //   movie.name.toLowerCase().includes(productName.toLowerCase())
  // );
  useEffect(() => {
    if (!query) return;
    fetchMovies(query);
  }, [query]);

  const fetchMovies = async query => {
    try {
      const movies = await helpers.fetchMovies(query);
      console.log(movies);
      setMovies(movies);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleMoviesQueryChange = query => {
    // if (query.trim() === '') {
    //   setQuery({ error: 'The search field is empty' });
    //   return;
    // }

    setQuery(query);
    setMovies([]);
    setError(null);
  };

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
      <SearchBox onChange={handleMoviesQueryChange} />
      {/* <MovieList movies={visibleProducts} /> */}
    </main>
  );
};

// export default Products;
