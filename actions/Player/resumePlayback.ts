"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";

const resumePlayback = async () => {
    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player/play`, {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      console.error('Erreur lors du play:', response.statusText);
    }
};
export default resumePlayback;