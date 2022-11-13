import { useLocation } from 'react-router-dom';
import NoPoster from '../../images/no_poster.jpg';
import {
  MovieListHTML,
  MovieItemHTML,
  Link,
  MoviePosterImgHTML,
  MovieTitleHTML,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MovieListHTML>
        {movies.map(({ id, title, posterURL }) => (
          <MovieItemHTML key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <MoviePosterImgHTML src={posterURL || NoPoster} alt="" />
              <MovieTitleHTML>{title}</MovieTitleHTML>
            </Link>
          </MovieItemHTML>
        ))}
      </MovieListHTML>
    </div>
  );
};
