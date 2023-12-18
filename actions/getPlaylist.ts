"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { Playlist } from "@/types";

// ne revoie plus un tableau
const getPlaylist = async (playlistId: string): Promise<Playlist> => {
    
  const userSession  = await getServerSession(authOptions);
  const id = userSession.user.id 
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  return (data as any) || [];

};
export default getPlaylist;