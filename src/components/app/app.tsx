import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import { AppRoutes, AuthStatuses } from '../../const';
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
  filmCardCount: number;
};

export default function App({ filmCardCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.Root}
            element={<MainScreen filmCardCount={filmCardCount} />}
          />
          <Route
            path={AppRoutes.AddReview}
            element={
              <PrivateRoute authorizatioStatus={AuthStatuses.Auth}>
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.SignIn} element={<SignIn />} />
          <Route path={AppRoutes.Movie} element={<MoviePage />} />
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
