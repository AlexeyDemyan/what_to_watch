import { createAction } from '@reduxjs/toolkit';
import { AuthStatuses, AppRoutes } from '../const';

export const chooseGenre = createAction<string>('addGenre');

export const resetGenre = createAction('resetGenre');

export const loadData = createAction<any>('loadData');

export const setDataLoadingStatus = createAction<boolean>(
  'setDataLoadingStatus'
);

export const requireAuthorization = createAction<AuthStatuses>(
  'requireAuthorization'
);

export const redirecToRoute = createAction<AppRoutes>('redirecToRoute');
