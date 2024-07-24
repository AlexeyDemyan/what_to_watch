export enum Genres {
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsNFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller',
}

export type Movie = {
  key: string;
  title: string;
  genre: Genres;
  year: number;
  imagePath: string;
};
