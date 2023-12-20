'use server'
import getCurrentPlayingTrack from "@/actions/getCurrentPlayingTrack";
import checkTrackLike from "@/actions/checkTrackLike";
import PlayerControls from '@/app/components/Player/PlayerControls';
import getPlaybackState from '@/actions/Player/getPlaybackState'


export default async function ListenBar() {
    const currentTrack = await getCurrentPlayingTrack();
    const isTrackLiked = await checkTrackLike(currentTrack.item.id);
    const playbackState = await getPlaybackState();

    return ( 
        <PlayerControls currentTrack={currentTrack} isTrackLiked={isTrackLiked} playbackState={playbackState} />     
    )
}