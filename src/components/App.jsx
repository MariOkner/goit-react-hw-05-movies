// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MoviesDetails } from '../pages/MoviesDetails';
import { Movies } from '../pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

// import { NotFound } from '../pages/NotFound';
// const createAsyncComponent = path => lazy(() => import(path));

// const About = createAsyncComponent('../pages/About');
// const Home = createAsyncComponent('../pages/Home');
// const ProductDetails = createAsyncComponent('../pages/ProductDetails');
// const Products = createAsyncComponent('../pages/Products');
// const Mission = createAsyncComponent('./Mission');
// const Team = createAsyncComponent('./Team');
// const Reviews = createAsyncComponent('./Reviews');
// const Achievement = createAsyncComponent('./Achievement.jsx');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
