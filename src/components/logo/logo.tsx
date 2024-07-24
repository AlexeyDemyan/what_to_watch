import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

export default function Logo(): JSX.Element {
  return (
    <Link className="logo__link" to={AppRoutes.Root}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}
