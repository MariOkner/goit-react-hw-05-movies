import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { TrendingList } from '../components/TrendingList';

import { TodayTitle, ErrorHTML } from './Home.styled';

export const Home = () => {
  // const movies = getMovies();
  // const productName = searchParams.get('name') ?? '';
  // const visibleTrendihg = movies.filter(movie =>
  //   movie.name.toLowerCase().includes(productName.toLowerCase())
  // );

  // _____________
  const [trendings, setTrendings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetchTrending(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);

  const fetchTrending = async abortSignal => {
    try {
      const trendings = await helpers.fetchTrending(abortSignal);
      setTrendings(trendings);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <TodayTitle>Trending today</TodayTitle>
      {error && <ErrorHTML>{error}</ErrorHTML>}

      {!error && <TrendingList trendings={trendings}></TrendingList>}
    </main>
  );
};

// export default Home;
