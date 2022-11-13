import NoPoster from '../../images/no_poster.jpg';
import {
  TrendingListHTML,
  TrendingItemHTML,
  Link,
  TrendingPosterImgHTML,
  TrendingTitleHTML,
} from './TrendingList.styled';

export const TrendingList = ({ trendings }) => {
  return (
    <div>
      <TrendingListHTML>
        {trendings.map(({ id, title, posterURL }) => (
          <TrendingItemHTML key={id}>
            <Link to={`movies/${id}`}>
              <TrendingPosterImgHTML src={posterURL || NoPoster} alt="" />
              <TrendingTitleHTML>{title}</TrendingTitleHTML>
            </Link>
          </TrendingItemHTML>
        ))}
      </TrendingListHTML>
    </div>
  );
};

// state={{ from: location }}
