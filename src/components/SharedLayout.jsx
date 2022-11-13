import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContainerHTML, HeaderHTML, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <ContainerHTML>
      <HeaderHTML>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </HeaderHTML>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ContainerHTML>
  );
};
