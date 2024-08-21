import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { tempCardCount } from './const';
import { movies } from './mocks/movies';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { checkAuthAction, fetchMovieAction } from './store/api-action';

store.dispatch(fetchMovieAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App movies={movies} filmCardCount={tempCardCount} />
    </Provider>
  </React.StrictMode>
);
