import helpers from 'helpers';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from '../components/MoviesDetailsComponents/BackLink';
import { Outlet } from 'react-router-dom';
import NoPoster from '../images/no_poster.jpg';

import {
  ErrorHTML,
  DetailsCartHTML,
  DetailsContentHTML,
  DetailsTitleHTML,
  DetailsTextHTML,
  OverviewTextHTML,
  InfoListHTML,
  Link,
  InfoTitleHTML,
  ItemHTML,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHome = location.state?.from ?? '/';

  useEffect(() => {
    const abortController = new AbortController();

    fetchDetails(id, abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [id]);

  const fetchDetails = async (id, abortSignal) => {
    try {
      const details = await helpers.fetchDetails(id, abortSignal);
      setDetails(details);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <BackLink to={backLinkHome}>Go back</BackLink>
      {error && <ErrorHTML>{error}</ErrorHTML>}
      {details && (
        <DetailsCartHTML>
          <>
            <img src={details.posterURL || NoPoster} alt="" />

            <DetailsContentHTML>
              <DetailsTitleHTML>{details.title}</DetailsTitleHTML>

              <p>UserScore: {details.userScore.toFixed(2)}%</p>

              <DetailsTextHTML>Overview</DetailsTextHTML>
              <OverviewTextHTML>{details.overview}</OverviewTextHTML>

              <DetailsTextHTML>Genres</DetailsTextHTML>
              <p>{details.genres.map(genre => genre.name).join(', ')}</p>
            </DetailsContentHTML>
          </>
        </DetailsCartHTML>
      )}
      <InfoListHTML>
        <InfoTitleHTML>Additional information</InfoTitleHTML>
        <ItemHTML>
          <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </Link>
        </ItemHTML>
        <ItemHTML>
          <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
            Reviews
          </Link>
        </ItemHTML>
      </InfoListHTML>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MoviesDetails;
