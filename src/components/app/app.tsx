import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import { AppRoutes, AuthStatuses } from '../../const';
import { Movie } from '../../types/movie';
import {
  SignIn,
  AddReview,
  MainScreen,
  MoviePage,
  MyList,
  Player,
  NotFound,
} from '../../pages/index';

type AppScreenProps = {
  movies: Movie[];
  filmCardCount: number;
};

export default function App({ movies, filmCardCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.Root}
            element={<MainScreen movies={movies} filmCardCount={filmCardCount} />}
          />
          <Route
            path={AppRoutes.AddReview}
            element={
              <PrivateRoute authorizatioStatus={AuthStatuses.Auth}>
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.SignIn} element={<SignIn onSignIn={() => {
            throw new Error('Sign in functionality not yet implemented')
          }} />} />
          <Route path={`${AppRoutes.Movie}/:id`} element={<MoviePage />} />
          <Route
            path={AppRoutes.MyList}
            element={
              <PrivateRoute authorizatioStatus={AuthStatuses.Auth}>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.Player} element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
