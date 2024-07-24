import { AppRoutes } from '../../const';
import { Movie } from '../../types/movie';
import { useNavigate } from 'react-router-dom';

type SmallFilmCardProps = {
  movie: Movie;
};

export default function SmallFilmCard({
  movie,
}: SmallFilmCardProps): JSX.Element {
  const { title, imagePath } = movie;
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card">
      <div
        onClick={() => {
          navigate(`${AppRoutes.Movie}/${3}`);
        }}
        className="small-film-card__image"
      >
        <img src={imagePath} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
}
