"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";

const seekToPosition = async (ms: number) => {
    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${ms}`, {
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
export default seekToPosition;