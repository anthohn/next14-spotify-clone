"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { CurrentTrack } from "@/types";

const getCurrentPlayingTrack = async (): Promise<CurrentTrack> => {
    
  const userSession  = await getServerSession(authOptions);
  const id = userSession.user.id 
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    
  return (data as any) || [];

};
export default getCurrentPlayingTrack;