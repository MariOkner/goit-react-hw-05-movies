import { StyledLink, ButtonHTML, Icon } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <ButtonHTML>
        <Icon />
        {children}
      </ButtonHTML>
    </StyledLink>
  );
};
