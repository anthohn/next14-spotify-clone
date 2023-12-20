"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth.js";
import { revalidatePath } from "next/cache";

const skipToNext = async () => {
    
  const userSession  = await getServerSession(authOptions);
  const token = userSession.accessToken

  const response = await fetch(`https://api.spotify.com/v1/me/player/next`, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      console.error('Erreur lors du skip de la piste suivante:', response.statusText);
    }
    // revalidatePath ('/')
};
export default skipToNext;