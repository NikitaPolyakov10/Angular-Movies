export interface Movie {
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: any[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface Data {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
