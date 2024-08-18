import { createReducer } from '@reduxjs/toolkit';
import {
  chooseGenre,
  resetGenre,
  loadData,
  requireAuthorization,
} from './action';
import { AuthStatuses } from '../const';

const initialState = {
  genre: '',
  films: '',
  authorizationStatus: AuthStatuses.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.genre = '';
    })
    .addCase(loadData, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
