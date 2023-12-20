'use client'
import { revalidatePath } from 'next/cache'
import { CurrentTrack } from "@/types";
import skipToNext from "@/actions/Player/skipToNext";
import skipToPrevious from "@/actions/Player/skipToPrevious";
import pausePlayback from "@/actions/Player/pausePlayback";
import resumePlayback from "@/actions/Player/resumePlayback";
// import Item from './Item';
import { useState } from 'react';


interface PlayerControlsProps {
    currentTrack: CurrentTrack;
  }


export default function PlayerControls({currentTrack} :PlayerControlsProps) {
    console.log(currentTrack);

    const is_playing = currentTrack.is_playing

    // const router = useRouter();

    const [isPlaying, setIsPlaying] = useState(is_playing);

    const togglePlayback = async () => {
        try {
            if (isPlaying) {
                await pausePlayback();
                setIsPlaying(false);
            } else {
                await resumePlayback();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error('Erreur lors de la lecture/pause:', error);
        }
    };

    const handleSkipToPrevious = async () => {
        try {
            await skipToPrevious();
        } catch (error) {
            console.error('Erreur lors de la piste précédente:', error);
        }
    };

    const handleSkipToNext = async () => {
        try {
            await skipToNext();
        } catch (error) {
            console.error('Erreur lors du skip de la piste suivante:', error);
        }
    };
  
    return (
        <div className="flex flex-col flex-grow items-center pt-[9px] space-y-[7px]">
            <div className="flex space-x-[24px] items-center h-8">
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>
                </button>
                <button onClick={handleSkipToPrevious}>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
                </button>
                {/* playling button */}
                <button className="bg-[#FFFFFF] p-[8px] rounded-full" onClick={togglePlayback}>
                    {isPlaying ? (
                        // Icône de pause
                        <svg data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16">
                            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                        </svg>
                    ) : (
                        // Icône de lecture
                        <svg data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    )}
                </button>
                {/* Skip button */}
                <button onClick={handleSkipToNext}>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
                </button>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
                </button>
            </div>
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