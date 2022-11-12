import { MoviesTrendingGallery } from '../components/MoviesTrendingGallery.styled';

export const TrendingGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
          <ProductName>{movie.title}</ProductName>
        </li>
      ))}
    </ul>
  );
};
