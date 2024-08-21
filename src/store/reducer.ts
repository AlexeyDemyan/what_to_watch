import { createReducer } from '@reduxjs/toolkit';
import {
  chooseGenre,
  resetGenre,
  loadData,
  requireAuthorization,
  setError,
  setDataLoadingStatus,
} from './action';
import { AuthStatuses } from '../const';

type InitialState = {
  genre: string;
  films: any;
  authorizationStatus: AuthStatuses;
  isDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  genre: '',
  films: '',
  authorizationStatus: AuthStatuses.Unknown,
  isDataLoading: false,
  error: null,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export { reducer };
