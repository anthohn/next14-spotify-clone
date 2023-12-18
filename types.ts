export interface Artist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
}

export interface RecentlyPlayedTrack {
  track: {
    id: string;
    name: string;
    external_urls: {
      spotify: string;
    };
    album: {
      images: Array<{ url: string }>;
    };
    artists: Artist[];
  };
  played_at: string;
}

export interface Track {
  id: string;
  name: string;
  href: {
    spotify: string;
  };
  album: {
    images: Array<{ url: string }>;
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
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
  owner: {
    id: string;
    display_name?: string;
  };
  public?: boolean;
  snapshot_id: string;
  tracks: {
    total: number;
    href: string;
  };
}