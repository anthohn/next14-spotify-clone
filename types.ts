export interface Artist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
}

export interface Track {
  id: string;
  name: string;
  uri: string;
  duration_ms: number;
  href: {
    spotify: string;
  };
  album: {
    images: Array<{ url: string }>;
    name: string;
  };
  artists: Artist[];
  played_at: string;
}

export interface Album {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
  artists: Artist[];
  tracks: Track[];
}

export interface Playlist {
  followers: {
    total: number;
  }
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
  owner: {
    href: string;
    id: string;
    display_name?: string;
  };
  public?: boolean;
  tracks: {
    total: number;
    href: string;
    items: PlaylistItem[];
    album: Album;
  };
}

export interface PlaylistItem {
  added_at: string;
  track: Track; 
}

export interface Show {
  show: {
    id: string;
    name: string;
    images: Array<{ url: string }>;
    publisher: string;
  }
  episodes: {
    total : number;
    items : SpotifyEpisode[];
  };
}

export interface SpotifyEpisode {
  id: string;
  name: string;
  description: string;
  images: Array<{ url: string }>;
  release_date: string;
  duration_ms: number;
}

export interface CurrentTrack {
  timestamp: number;
  context: {
    external_urls: {
      spotify: string;
    };
    href: string;
    type: string;
    uri: string;
  };
  progress_ms: number;
  item: {
    album: {
      album_type: string;
      artists: Artist[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{ url: string }>;
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    available_markets: string[];
    // Autres propriétés de l'élément de piste
    // ...
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  };
  currently_playing_type: string;
  actions: {
    disallows: {
      pausing: boolean;
    };
  };
  is_playing: boolean;
}

export interface GetPlaybackState {
  timestamp: number;
  context: {
    external_urls: {
      spotify: string;
    };
    href: string;
    type: string;
    uri: string;
  };
  progress_ms: number;
  item: {
    album: {
      album_type: string;
      artists: Artist[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{ url: string }>;
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    available_markets: string[];
    // Autres propriétés de l'élément de piste
    // ...
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  };
  currently_playing_type: string;
  actions: {
    disallows: {
      pausing: boolean;
    };
  };
  is_playing: boolean;
}
