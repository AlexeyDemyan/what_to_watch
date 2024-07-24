import { Genres, Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    key: 'aa',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: Genres.KidsNFamily,
    year: 2014,
    imagePath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    key: 'ab',
    title: 'Aviator',
    genre: Genres.Documentary,
    year: 2015,
    imagePath: 'img/aviator.jpg',
  },
  {
    key: 'ac',
    title: 'Snatch',
    genre: Genres.Crime,
    year: 2009,
    imagePath: 'img/snatch.jpg',
  },
  {
    key: 'ad',
    title: 'What We Do In The Shadows',
    genre: Genres.Comedy,
    year: 2020,
    imagePath: 'img/what-we-do-in-the-shadows.jpg',
  },
];
