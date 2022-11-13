import styled from 'styled-components';

export const TodayTitleHTML = styled.h2`
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  text-transform: uppercase;

  color: #000000;
  background-image: repeating-linear-gradient(
    -45deg,
    #f6ba52,
    #f6ba52 10px,
    #ffd180 10px,
    #ffd180 20px
  );
`;

export const ErrorHTML = styled.h3`
  text-align: center;
`;
