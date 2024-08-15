import { createReducer } from '@reduxjs/toolkit';
import { chooseGenre, resetGenre } from './action';

const initialState = {
  genre: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.genre = '';
    });
});

export { reducer };
