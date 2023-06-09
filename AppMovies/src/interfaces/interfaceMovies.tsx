export interface IMovieDBMoviesResponse {
  date?: IDates;
  page: number;
  results?: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IDates {
  maximum: string;
  minimum: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
  Zh = 'zh',
}

export interface Belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Production_company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Production_country {
  iso_3166_1: string;
  name: string;
}

export interface Spoken_language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieFull {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongs_to_collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_company[];
  production_countries: Production_country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spoken_language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
