import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  ErrorHTML,
  Section,
  CastList,
  CastItem,
  ContentCard,
  Title,
  Text,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id);
  }, [id]);

  const fetchCast = async id => {
    try {
      const cast = await helpers.fetchCast(id);
      console.log(cast);
      setCast(cast);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return cast && cast.length > 0 ? (
    <Section>
      {error && <ErrorHTML>{error}</ErrorHTML>}
      <CastList>
        {cast.map(({ id, name, character, profileURL }) => (
          <CastItem key={id}>
            {profileURL ? (
              <img src={profileURL} alt="" />
            ) : (
              <img src="../images/NO.jpg" alt="" />
            )}
            <ContentCard>
              <Title>{name}</Title>
              <Text>{character}</Text>
            </ContentCard>
          </CastItem>
        ))}
      </CastList>
    </Section>
  ) : (
    "We don't have informations"
  );
};

// export default Mission;
