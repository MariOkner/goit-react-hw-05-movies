import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerHTML = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HeaderHTML = styled.header`
  display: flex;
  padding: 10px 0;
  border-bottom: 2px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
