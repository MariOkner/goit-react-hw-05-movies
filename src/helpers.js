import axios from 'axios';

const MOVIES_BASE_URL = 'https://api.themoviedb.org/3';
const MOVIES_KEY = '99c2fb450b803b86448378b118c18b64';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p';
const MOVIE_IMG_SIZE = 'w342';
const CAST_IMG_SIZE = 'w154';

const fetchTrending = async abortSignal => {
  const urlTrending = `${MOVIES_BASE_URL}/trending/movie/day?api_key=${MOVIES_KEY}`;

  try {
    const response = await axios.get(urlTrending, {
      signal: abortSignal,
    });

    return response.data.results.map(({ id, title, poster_path }) => {
      return {
        id: id,
        title: title,
        posterURL: `${IMG_BASE_URL}/${MOVIE_IMG_SIZE}${poster_path}`,
      };
    });
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchMovies = async query => {
  const urlSearch = `${MOVIES_BASE_URL}/search/movie?api_key=${MOVIES_KEY}&query=${query}&include_adult=true`;
  try {
    const response = await axios.get(urlSearch);
    return response;
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchDetails = async id => {
  const urlDetails = `${MOVIES_BASE_URL}/movie/${id}?api_key=${MOVIES_KEY}&language=en-US`;

  try {
    const response = await axios.get(urlDetails);

    const { poster_path, original_title, vote_average, overview, genres } =
      response.data;
    return {
      posterURL: `${IMG_BASE_URL}/${MOVIE_IMG_SIZE}${poster_path}`,
      title: original_title,
      userScore: vote_average * 10,
      overview: overview,
      genres: genres,
    };
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchCast = async id => {
  const urlCast = `${MOVIES_BASE_URL}/movie/${id}/credits?api_key=${MOVIES_KEY}&language=en-US`;
  try {
    const response = await axios.get(urlCast);

    return response.data.cast.map(({ id, name, character, profile_path }) => {
      return {
        id: id,
        name: name,
        character: character,
        profileURL: `${IMG_BASE_URL}/${CAST_IMG_SIZE}${profile_path}`,
      };
    });
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchReviews = async id => {
  const urlReviews = `${MOVIES_BASE_URL}/movie/${id}/reviews?api_key=${MOVIES_KEY}&language=en-US`;
  try {
    const response = await axios.get(urlReviews);
    console.log(response.data.results);
    return response.data.results.map(({ id, author, content }) => {
      return {
        id: id,
        author: author,
        content: content,
      };
    });
  } catch (error) {
    throw new Error('Backend error');
  }
};

const helpers = {
  fetchTrending,
  fetchMovies,
  fetchDetails,
  fetchCast,
  fetchReviews,
};
export default helpers;
// ______________________________
//  name: 'Sneakers 4' },
//   { id: 'p-1', name: 'Pants 1' },const movies = [
//   { id: 'h-1', name: 'Hoodie 1' },
//   { id: 'h-2', name: 'Hoodie 2' },
//   { id: 'h-3', name: 'Hoodie 3' },
//   { id: 's-1', name: 'Sneakers 1' },
//   { id: 's-2', name: 'Sneakers 2' },
//   { id: 's-3', name: 'Sneakers 3' },
//   { id: 's-4',
//   { id: 'p-2', name: 'Pants 2' },
//   { id: 'p-3', name: 'Pants 3' },
// ];

// export const getMovies = () => {
//   return movies;
// };

// export const getMovieById = movieId => {
//   return movies.find(movie => movie.id === movieId);
// };
