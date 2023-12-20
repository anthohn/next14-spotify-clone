"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";

const pausePlayback = async () => {
    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player/pause`, {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response; 
};
export default pausePlayback;