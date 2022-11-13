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
        posterURL: poster_path
          ? `${IMG_BASE_URL}/${MOVIE_IMG_SIZE}${poster_path}`
          : null,
      };
    });
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchMovies = async (query, abortSignal) => {
  const urlMovies = `${MOVIES_BASE_URL}/search/movie?api_key=${MOVIES_KEY}&query=${query}&include_adult=true`;

  try {
    const response = await axios.get(urlMovies, {
      signal: abortSignal,
    });

    return response.data.results.map(({ id, title, poster_path }) => {
      return {
        id: id,
        title: title,
        posterURL: poster_path
          ? `${IMG_BASE_URL}/${MOVIE_IMG_SIZE}${poster_path}`
          : null,
      };
    });
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchDetails = async (id, abortSignal) => {
  const urlDetails = `${MOVIES_BASE_URL}/movie/${id}?api_key=${MOVIES_KEY}&language=en-US`;

  try {
    const response = await axios.get(urlDetails, {
      signal: abortSignal,
    });

    const { poster_path, original_title, vote_average, overview, genres } =
      response.data;

    return {
      posterURL: poster_path
        ? `${IMG_BASE_URL}/${MOVIE_IMG_SIZE}${poster_path}`
        : null,
      title: original_title,
      userScore: vote_average * 10,
      overview: overview,
      genres: genres,
    };
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchCast = async (id, abortSignal) => {
  const urlCast = `${MOVIES_BASE_URL}/movie/${id}/credits?api_key=${MOVIES_KEY}&language=en-US`;
  try {
    const response = await axios.get(urlCast, {
      signal: abortSignal,
    });

    return response.data.cast.map(({ id, name, character, profile_path }) => {
      return {
        id: id,
        name: name,
        character: character,
        profileURL: profile_path
          ? `${IMG_BASE_URL}/${CAST_IMG_SIZE}${profile_path}`
          : null,
      };
    });
  } catch (error) {
    throw new Error('Backend error');
  }
};

const fetchReviews = async (id, abortSignal) => {
  const urlReviews = `${MOVIES_BASE_URL}/movie/${id}/reviews?api_key=${MOVIES_KEY}&language=en-US`;

  try {
    const response = await axios.get(urlReviews, {
      signal: abortSignal,
    });

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

// https://image.tmdb.org/t/p/w154null
// https://image.tmdb.org/t/p/w154/m2lUTpivduEiRwyPIrdg8hcI8zq.jpg"
