import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const BoxHTML = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 16px 10px 16px 0;
`;

export const TitleSearchHTML = styled.h3`
  margin-right: 10px;
  color: orangered;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
