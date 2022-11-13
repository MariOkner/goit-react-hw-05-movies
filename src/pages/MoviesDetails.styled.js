import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ErrorHTML = styled.h3`
  text-align: center;
`;

export const DetailsCartHTML = styled.div`
  display: flex;
  padding: 20px;
`;

export const DetailsContentHTML = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;

export const DetailsTitleHTML = styled.h3`
  font-size: 27px;
`;

export const DetailsTextHTML = styled.b`
  font-size: 20px;
`;

export const OverviewTextHTML = styled.p`
  margin-bottom: 50px;
  line-height: 1.5;
`;

export const InfoListHTML = styled.ul`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  /* text-decoration: none; */
  /* font-size: 20px; */
`;

export const InfoTitleHTML = styled.h3`
  padding: 20px 0;
`;

export const ItemHTML = styled.li`
  padding-bottom: 10px;
`;

export const Link = styled(NavLink)`
  color: #004ff9;
  text-decoration: none;

  :hover {
    color: orangered;
  }
`;
