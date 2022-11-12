import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ErrorHTML = styled.p`
  color: azure;
  text-align: center;
`;

export const DetailsCart = styled.div`
  display: flex;
  padding: 20px;
`;

export const DetailsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;

export const DetailsTitle = styled.h3`
  font-size: 27px;
`;

export const DetailsText = styled.b`
  font-size: 20px;
`;

export const OverviewText = styled.p`
  margin-bottom: 50px;
  line-height: 1.5;
`;

export const InfoList = styled.ul`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  /* text-decoration: none; */
  /* font-size: 20px; */
`;

export const InfoTitle = styled.h3`
  padding: 20px 0;
`;

export const Item = styled.li`
  padding-bottom: 10px;
`;

export const Link = styled(NavLink)`
  color: #004ff9;
  text-decoration: none;

  :hover {
    color: orangered;
  }
`;
