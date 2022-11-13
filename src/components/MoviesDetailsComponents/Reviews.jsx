import helpers from 'helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorHTML, SectionHTML, TitleHTML, TextHTML } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    fetchReviews(id);

    return () => {
      abortController.abort();
    };
  }, [id]);

  const fetchReviews = async (id, abortSignal) => {
    try {
      const reviews = await helpers.fetchReviews(id, abortSignal);
      setReviews(reviews);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return reviews && reviews.length > 0 ? (
    <SectionHTML>
      {error && <ErrorHTML>{error}</ErrorHTML>}
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <TitleHTML>Author: {author}</TitleHTML>
          <TextHTML>{content}</TextHTML>
        </div>
      ))}
    </SectionHTML>
  ) : (
    "We don't have any reviews for this movie."
  );
};

export default Reviews;
