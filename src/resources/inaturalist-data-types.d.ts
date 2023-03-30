export interface Observation {
  id?:                                number;
  observed_on?:                       Date;
  description?:                       string | null;
  latitude?:                          string | null;
  longitude?:                         string | null;
  map_scale?:                         string | null;
  timeframe?:                         string | null;
  species_guess?:                     string | null;
  user_id?:                           number;
  taxon_id?:                          number;
  created_at?:                        Date;
  updated_at?:                        Date;
  place_guess?:                       string | null;
  id_please?:                         boolean;
  observed_on_string?:                string | null;
  iconic_taxon_id?:                   number;
  num_identification_agreements?:     number;
  num_identification_disagreements?:  number;
  time_observed_at?:                  Date;
  time_zone?:                         string | null;
  location_is_exact?:                 boolean;
  delta?:                             boolean;
  positional_accuracy?:               number;
  private_latitude?:                  string | null;
  private_longitude?:                 string | null;
  geoprivacy?:                        string | null;
  quality_grade?:                     string | null;
  positioning_method?:                string | null;
  positioning_device?:                string | null;
  out_of_range?:                      string | null;
  license?:                           string | null;
  uri?:                               string | null;
  observation_photos_count?:          number;
  comments_count?:                    number;
  zic_time_zone?:                     string | null;
  oauth_application_id?:              string | null;
  observation_sounds_count?:          number;
  identifications_count?:             number;
  captive?:                           boolean;
  community_taxon_id?:                number;
  site_id?:                           number;
  old_uuid?:                          string | null;
  public_positional_accuracy?:        number;
  mappable?:                          boolean;
  cached_votes_total?:                number;
  last_indexed_at?:                   Date;
  private_place_guess?:               string | null;
  uuid?:                              string | null;
  taxon_geoprivacy?:                  string | null;
  tag_list?:                          string[];
  short_description?:                 string | null;
  user_login?:                        string | null;
  iconic_taxon_name?:                 string | null;
  faves_count?:                       number;
  created_at_utc?:                    Date;
  updated_at_utc?:                    Date;
  time_observed_at_utc?:              Date;
  owners_identification_from_vision?: boolean;
  taxon?:                             Taxon;
  iconic_taxon?:                      Taxon;
  user?:                              ObservedBy;
  photos?:                            Photo[];
}

export interface Taxon {
  id?:          number;
  name?:        string | null;
  rank?:        string | null;
  rank_level?:  number;
  ancestry?:    string | null;
  common_name?: CommonName;
}

export interface CommonName {
  id?:       number;
  name?:     string | null;
  is_valid?: boolean;
  lexicon?:  string | null;
}

export interface Photo {
  id?:                        number;
  user_id?:                   number;
  native_photo_id?:           string | null;
  created_at?:                Date;
  updated_at?:                Date;
  native_page_url?:           string | null;
  native_username?:           string | null;
  native_realname?:           string | null;
  license?:                   number;
  subtype?:                   string | null;
  native_original_image_url?: string | null;
  uuid?:                      string | null;
  file_extension_id?:         number;
  file_prefix_id?:            number;
  width?:                     number;
  height?:                    number;
  license_code?:              string | null;
  attribution?:               string | null;
  license_name?:              string | null;
  license_url?:               string | null;
  type?:                      string | null;
  square_url?:                string | null;
  thumb_url?:                 string | null;
  small_url?:                 string | null;
  medium_url?:                string | null;
  large_url?:                 string | null;
}

export interface ObservedBy {
  login?:         string | null;
  user_icon_url?: string | null;
}
