export interface MovieProps {
  poster: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  id: number;
}

export interface MoviePropsMutation {
  poster: string;
  title: string;
  year: string;
  genre: string;
  rating: number;
  id: number;
}

export interface APICountry {
  name: string;
  alpha3Code: string;
}

export interface APIOneCountry {
  name: string;
  capital: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  borders: string[];
}

export interface IProps {
  hasItem: boolean;
  clicked: boolean;
  id: string;
}
