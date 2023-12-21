"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";

const toogleShuffle = async (state: boolean) => {
    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player/shuffle?state=${state}`, {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (!response.ok) {
      console.error('Erreur lors du suffle:', response.statusText);
    }
};
export default toogleShuffle;