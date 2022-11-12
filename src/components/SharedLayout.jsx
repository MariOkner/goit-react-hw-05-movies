// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        {/* <Logo>MARYNA_STYLED</Logo> */}
        <nav>
          <Link to="/" end>
            Home
          </Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </Container>
  );
};
