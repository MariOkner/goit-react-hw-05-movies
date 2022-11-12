import {
  TrendingWraper,
  TrendingListHTML,
  TrendingItemHTML,
  Link,
  TrendingPosterImg,
  TrendingTitle,
} from './TrendingList.styled';

export const TrendingList = ({ trendings }) => {
  return (
    <TrendingWraper>
      <TrendingListHTML>
        {trendings.map(({ id, title, posterURL }) => (
          <TrendingItemHTML key={id}>
            <Link to={`movies/${id}`}>
              <TrendingPosterImg src={posterURL} alt="" />
              <TrendingTitle>{title}</TrendingTitle>
            </Link>
          </TrendingItemHTML>
        ))}
      </TrendingListHTML>
    </TrendingWraper>
  );
};

// state={{ from: location }}
