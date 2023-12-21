'use server'
import checkTrackLike from "@/actions/checkTrackLike";
import PlayerControls from '@/app/components/Player/PlayerControls';
import getPlaybackState from '@/actions/Player/getPlaybackState'


export default async function BottomBar() {
    const playbackState = await getPlaybackState();
    const isTrackLiked = await checkTrackLike(playbackState.item.id);

    return ( 
        <PlayerControls isTrackLiked={isTrackLiked} playbackState={playbackState} />     
    )
}