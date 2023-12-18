"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { Playlist } from "@/types";

const getPlaylists = async (): Promise<Playlist[]> => {
    
  const userSession  = await getServerSession(authOptions);
  const id = userSession.user.id 
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/users/${id}/playlists?limit=25`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  return (data.items as any) || [];

};
export default getPlaylists;