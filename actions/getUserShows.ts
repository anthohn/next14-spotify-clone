"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { Show } from "@/types";

const getUserShows = async (): Promise<Show[]> => {
    
  const userSession  = await getServerSession(authOptions);
  const id = userSession.user.id 
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/shows?limit=7`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  return (data.items as any) || [];

};
export default getUserShows;