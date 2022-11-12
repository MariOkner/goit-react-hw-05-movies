import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import { getMovieById } from '../helpers';
import { BackLink } from '../components/BackLink';
import { Outlet } from 'react-router-dom';

import {
  ErrorHTML,
  DetailsCart,
  DetailsContent,
  DetailsTitle,
  DetailsText,
  OverviewText,
  InfoList,
  Link,
  InfoTitle,
  Item,
} from './MoviesDetails.styled';

export const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHome = location.state?.from ?? '/';
  // console.log(location.state);

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  const fetchDetails = async id => {
    try {
      const details = await helpers.fetchDetails(id);
      setDetails(details);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <BackLink to={backLinkHome}>Go back</BackLink>
      {error && <ErrorHTML>{error}</ErrorHTML>}

      {details && (
        <DetailsCart>
          <>
            {details.posterURL ? (
              <img src={details.posterURL} alt="" />
            ) : (
              'No Poster'
            )}

            <DetailsContent>
              <DetailsTitle>{details.title}</DetailsTitle>

              <p>UserScore: {details.userScore.toFixed(2)}%</p>

              <DetailsText>Overview</DetailsText>
              <OverviewText>{details.overview}</OverviewText>

              <DetailsText>Genres</DetailsText>
              <p>{details.genres.map(genre => genre.name).join(', ')}</p>
            </DetailsContent>
          </>
        </DetailsCart>
      )}
      <InfoList>
        <InfoTitle>Additional information</InfoTitle>
        <Item>
          <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </Link>
        </Item>
        <Item>
          <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
            Reviews
          </Link>
        </Item>
      </InfoList>
      <Outlet />
    </main>
  );
};

// export default ProductDetails;

// {details.map(({ posterMovie, titleMovie, userScore, overview, genres }) => (
// <PosterImg src={posterMovie} alt="" /><TitleMovie>{titleMovie}</TitleMovie>))}
