'use server'
import getCurrentPlayingTrack from "@/actions/getCurrentPlayingTrack";
import checkTrackLike from "@/actions/checkTrackLike";
import PlayerControls from '@/app/components/Player/PlayerControls'

export default async function ListenBar() {
    const currentTrack = await getCurrentPlayingTrack();
    const isTrackLiked = await checkTrackLike(currentTrack.item.id);

    return ( 
        <PlayerControls currentTrack={currentTrack} isTrackLiked={isTrackLiked} />     
    )
}