import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

export default function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Logo />
      </div>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width={63}
              height={63}
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoutes.SignIn} className="user-block__link">
            Sign out
          </Link>
        </li>
      </ul>
    </header>
  );
}
