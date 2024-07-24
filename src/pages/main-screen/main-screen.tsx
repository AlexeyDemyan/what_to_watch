import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { Movie, Genres } from '../../types/movie';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useNavigate } from 'react-router-dom';

type MainScreenProps = {
  movies: Movie[];
  filmCardCount: number;
};

export default function MainScreen({
  movies,
  filmCardCount,
}: MainScreenProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>What To Watch</title>
        </Helmet>
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <div className="film-card__buttons">
                  <button onClick={() => {navigate(AppRoutes.Player)}}
                    className="btn btn--play film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                <Link to={AppRoutes.MyList}>
                  <button
                    className="btn btn--list film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{filmCardCount}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            {Object.values(Genres).map((genre) => {
              return (
                <li key={genre} className="catalog__genres-item">
                  <a href="#" className="catalog__genres-link">
                    {genre}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="catalog__films-list">
            {movies.map((movie) => (
              <SmallFilmCard key={movie.key} movie={movie} />
            ))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
