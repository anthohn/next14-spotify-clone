const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        // port: '', (vous pouvez omettre 'port' s'il n'est pas nécessaire)
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blend-playlist-covers.spotifycdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com',
        pathname: '/**',
      },
      // Ajoutez cette configuration pour mosaic.scdn.co
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wrapped-images.spotifycdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-fa.spotifycdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seeded-session-images.scdn.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'charts-images.scdn.co', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thisis-images.spotifycdn.com',
        pathname: '/**',
      },
      
    ],
  },
};

module.exports = nextConfig;
