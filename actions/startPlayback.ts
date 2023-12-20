"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";

const startPlayback = async (trackUri: string) => {
    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const data = {
    uris: [trackUri]
  };

  const response = await fetch(`https://api.spotify.com/v1/me/player/play`, {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(data) // Envoyez les données JSON contenant l'URI de la musique
  });

  if (!response.ok) {
    console.error('Erreur lors du play:', response.statusText);
  }
};
export default startPlayback;