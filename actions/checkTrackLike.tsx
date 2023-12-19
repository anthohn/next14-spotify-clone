"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { Track } from "@/types";

const checkTrackLike = async (trackId: string): Promise<Track> => {
    
  const userSession  = await getServerSession(authOptions);
  const id = userSession.user.id 
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${trackId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data[0] || false;

};
export default checkTrackLike;