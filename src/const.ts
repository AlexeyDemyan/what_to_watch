export const tempCardCount = 9;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoutes {
  Root = '/',
  AddReview = '/addreview',
  SignIn = '/signin',
  Movie = '/movie',
  MyList = '/mylist',
  Player = '/player',
}

export enum AuthStatuses {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Movies = '/movies',
  Login = '/login',
  Logout = '/logout',
}
