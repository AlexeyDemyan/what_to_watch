import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthStatuses } from '../../const';

type PrivateRouteProps = {
  authorizatioStatus: AuthStatuses;
  children: JSX.Element;
};

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizatioStatus, children } = props;

  return authorizatioStatus === AuthStatuses.Auth ? (
    children
  ) : (
    <Navigate to={AppRoutes.SignIn} />
  );
}
