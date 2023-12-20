import { revalidatePath } from 'next/cache'
import { CurrentTrack } from "@/types";
import skipToNext from "@/actions/Player/skipToNext";
import skipToPrevious from "@/actions/Player/skipToPrevious";
import pausePlayback from "@/actions/Player/pausePlayback";
import resumePlayback from "@/actions/Player/resumePlayback";
import Item from './Item';


interface PlayerControlsProps {
    currentTrack: CurrentTrack;
  }

export default async function PlayerControls({currentTrack} :PlayerControlsProps) {
    // 'use server'
  
    const is_playing = currentTrack.is_playing
    return (
        <div className="flex flex-col flex-grow items-center pt-[9px] space-y-[7px]">
            <Item is_playing={is_playing} />
            <div className="flex space-x-2 w-full justify-center text-[11px] text-neutral-400 items-center">
                <p>2:15</p>
                <div className=" items-center w-8/12 bg-[#4D4D4D] rounded-full h-1 dark:bg-gray-700">
                    <div className="bg-[#FFFFFF] hover:bg-[#1DB954] h-1 rounded-full w-2/6"></div>
                </div>
                <p>3:19</p>
            </div>
        </div>
    )
}