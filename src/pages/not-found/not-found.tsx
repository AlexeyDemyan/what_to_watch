import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

export default function NotFound(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>404 Page not found</h1>
      <Logo />
    </Fragment>
  );
}
