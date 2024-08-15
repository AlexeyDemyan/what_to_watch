import { createAction } from '@reduxjs/toolkit';

export const chooseGenre = createAction<string>('addGenre');

export const resetGenre = createAction('resetGenre');
