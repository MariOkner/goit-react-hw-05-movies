import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingWraper = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
`;

export const TrendingListHTML = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  grid-gap: 15px;

  /* justify-content: center; */
  padding: 0;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const TrendingItemHTML = styled.li`
  /* width: 100%; */
  /* height: 569px; */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;

  color: black;
  text-decoration: none;

  :hover {
    color: orangered;
  }
`;

export const TrendingPosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export const TrendingTitle = styled.h3`
  padding: 10px;

  white-space: normal;

  text-transform: uppercase;
`;
