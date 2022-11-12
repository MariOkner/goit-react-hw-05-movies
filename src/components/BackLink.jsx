import { StyledLink, Button, Icon } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <Button>
        <Icon />
        {children}
      </Button>
    </StyledLink>
  );
};
