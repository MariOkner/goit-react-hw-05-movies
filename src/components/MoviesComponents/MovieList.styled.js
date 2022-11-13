import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieListHTML = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 15px;

  padding: 0;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItemHTML = styled.li`
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

  color: #000000;
  text-decoration: none;

  :hover {
    color: orangered;
  }
`;

export const MoviePosterImgHTML = styled.img`
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export const MovieTitleHTML = styled.h3`
  padding: 10px;
  font-size: 16px;
  white-space: normal;

  text-transform: uppercase;
`;
