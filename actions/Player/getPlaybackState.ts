"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { GetPlaybackState } from "@/types"

const getPlaybackState = async (): Promise<GetPlaybackState> => {

    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player`, {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    
  return (data as any) || [];
};
export default getPlaybackState;