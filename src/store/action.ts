import { createAction } from '@reduxjs/toolkit';
import { AuthStatuses } from '../const';

export const chooseGenre = createAction<string>('addGenre');

export const resetGenre = createAction('resetGenre');

export const loadData = createAction<string>('loadData');

export const requireAuthorization = createAction<AuthStatuses>(
  'requireAuthorization'
);