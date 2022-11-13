import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { TrendingList } from '../components/HomeComponents/TrendingList';

import { TodayTitleHTML, ErrorHTML } from './Home.styled';

const Home = () => {
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
    <section>
      <TodayTitleHTML>Trending today</TodayTitleHTML>

      {error ? (
        <ErrorHTML>{error}</ErrorHTML>
      ) : (
        <TrendingList trendings={trendings} />
      )}
    </section>
  );
};

export default Home;
