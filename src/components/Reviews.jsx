import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Section, ErrorHTML, Title, Text } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  const fetchReviews = async id => {
    try {
      const reviews = await helpers.fetchReviews(id);
      console.log(reviews);
      setReviews(reviews);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return reviews && reviews.length > 0 ? (
    <Section>
      {error && <ErrorHTML>{error}</ErrorHTML>}
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <Title>Author: {author}</Title>
          <Text>{content}</Text>
        </div>
      ))}
    </Section>
  ) : (
    "We don't have any reviews for this movie."
  );
};

// export default Reviews;
