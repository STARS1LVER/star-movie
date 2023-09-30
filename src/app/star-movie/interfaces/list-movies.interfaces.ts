export interface ListTop {
  page:          number;
  results:       ResultList[];
  total_pages:   number;
  total_results: number;
}

export interface ResultList {
  adult:             boolean;
  backdrop_path:     string;
  id:                number;
  name:             string;
  original_language: OriginalLanguage;
  original_name:    string;
  overview:          string;
  poster_path:       string;
  media_type:        MediaType;
  genre_ids:         number[];
  popularity:        number;
  first_air_date?:   Date;
  vote_average:      number;
  vote_count:        number;
  origin_country?:   string[];
  title:            string;
  original_title?:   string;
  release_date?:     Date;
  video?:            boolean;
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Th = "th",
}
