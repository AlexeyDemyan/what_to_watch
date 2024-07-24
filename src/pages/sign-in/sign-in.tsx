import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { useState, ChangeEvent, FormEvent } from 'react';

type SignInProps = {
  onSignIn: () => void;
};

export default function SignIn({ onSignIn }: SignInProps): JSX.Element {
  const [formData, setFormData] = useState({
    'user-email': '',
    'user-password': '',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={(evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            onSignIn();
          }}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={handleFieldChange}
                value={formData['user-email']}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={handleFieldChange}
                value={formData['user-password']}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
