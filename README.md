# Spotify Clone

This project was created to apply my Next.js and NextAuth.js knowledge by cloning Spotify web app.

## Overview
![image](https://github.com/anthohn/next14-spotify-clone/assets/75019251/2e291010-7d3f-4963-ae0e-d6c17cf1bf0b)

## Planned Features

- **Spotify Authentication**: Users can log in with their Spotify accounts using the Spotify API.
- **Playlists**: Display the user's playlist on sidebar.
- **Playlists content**: Display playlist tracks.
- **Player Controls**: User can pause, play, skip, previous music and change on timeline.
- soon ..

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-rendered React applications.
- [NextAuth.js](https://next-auth.js.org/) - Authentication library for Next.js.
- [Spotify API](https://developer.spotify.com/documentation/web-api/) - Access Spotify user data.

## Technologies Version

| Technologie | Version        |
|-------------|----------------|
| Next.js     | 14.0.4         |
| NextAuth.js | 4.24.5         |
| TailwindCSS | 3.3.0          |
| npm         | 10.2.4         |


## Development Environment

1. Clone the repository:

    ```bash
    git clone https://github.com/anthohn/next14-spotify-clone.git
    ```

2. Install dependencies:

    ```bash
    cd next14-spotify-clone
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your Spotify API credentials:

    ```env
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-next-auth-secret"

    SPOTIFY_CLIENT_ID="your-client-id"
    SPOTIFY_CLIENT_SECRET="your-client-secret"
    ```

    Replace `your-client-id` and `your-client-secret` with your Spotify application credentials.
   
    Replace `your-next-auth-secret` with a generated secret key. You can generate one using the following OpenSSL command:
    ```bash
    openssl rand -base64 32
    ````

5. Run the application:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
