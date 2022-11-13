import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoPhoto from '../../images/NO.jpg';

import {
  ErrorHTML,
  CastListHTML,
  CastItemHTML,
  TitleHTML,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    fetchCast(id, abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [id]);

  const fetchCast = async (id, abortSignal) => {
    try {
      const cast = await helpers.fetchCast(id, abortSignal);
      setCast(cast);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return cast && cast.length > 0 ? (
    <section>
      {error && <ErrorHTML>{error}</ErrorHTML>}
      <CastListHTML>
        {cast.map(({ id, name, character, profileURL }) => (
          <CastItemHTML key={id}>
            <img src={profileURL || NoPhoto} alt="" />

            <div>
              <TitleHTML>{name}</TitleHTML>
              <p>{character}</p>
            </div>
          </CastItemHTML>
        ))}
      </CastListHTML>
    </section>
  ) : (
    "We don't have informations"
  );
};

export default Cast;
