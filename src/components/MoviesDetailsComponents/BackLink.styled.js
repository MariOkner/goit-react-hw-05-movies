import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  /* align-items: center; */
  /* gap: 4px; */
  padding: 8px 20px;
  color: red;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ButtonHTML = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 22px;
  border-radius: 4px;
  border-bottom: 3px solid #525252;
  color: #000000;
  background-color: #ffd180;

  font-size: 18px;
  font-weight: 500;
  align-items: center;
  text-align: center;
  /* cursor: pointer; */

  :hover {
    transition: 0.7s;
    color: orangered;
    background-color: #ffffff;
  }
`;

export const Icon = styled(HiArrowLeft)`
  width: 24px;
  height: 24px;
  padding-right: 5px;
`;
