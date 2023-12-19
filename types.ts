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