import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { tempCardCount } from './const';
import { movies } from './mocks/movies';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App movies={movies} filmCardCount={tempCardCount} />
    </Provider>
  </React.StrictMode>
);
