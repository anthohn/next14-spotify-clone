'use client'
import getCurrentPlayingTrack from "@/actions/getCurrentPlayingTrack";
import { CurrentTrack } from "@/types";
import { Track } from '@/types';
import skipToNext from "@/actions/Player/skipToNext";
import skipToPrevious from "@/actions/Player/skipToPrevious";
import pausePlayback from "@/actions/Player/pausePlayback";
import resumePlayback from "@/actions/Player/resumePlayback";
import Image from 'next/image';
import { useState } from 'react';

interface PlayerControlsProps {
    currentTrack: CurrentTrack;
    isTrackLiked: Track;
}

export default function PlayerControls({ currentTrack, isTrackLiked }: PlayerControlsProps) {

    const [currentTrackInfo, setCurrentTrackInfo] = useState({
        isPlaying: currentTrack.is_playing,
        image: currentTrack.item.album.images[0]?.url,
        trackName: currentTrack.item.name,
        artists: currentTrack.item.album.artists
    });

    const fetchCurrentTrack = async () => {
        try {
            const newTrack = await getCurrentPlayingTrack();
            setCurrentTrackInfo({
                isPlaying: newTrack.is_playing,
                image: newTrack.item.album.images[0]?.url,
                trackName: newTrack.item.name,
                artists: newTrack.item.album.artists
            });
        } catch (error) {
            console.error('Erreur lors de la récupération de la piste en cours:', error);
        }
    };
    const togglePlayback = async () => {
        try {
            if (currentTrackInfo.isPlaying) {
                await pausePlayback();
            } else {
                await resumePlayback();
            }
            setCurrentTrackInfo(prevTrackInfo => ({
                ...prevTrackInfo,
                isPlaying: !prevTrackInfo.isPlaying
            }));
        } catch (error) {
            console.error('Erreur lors de la lecture/pause:', error);
        }
    };
    const handleSkipToPrevious = async () => {
        await skipToPrevious();
        setTimeout(async () => {
            await fetchCurrentTrack();
        }, 400);
    };
    const handleSkipToNext = async () => {
        await skipToNext();
        setTimeout(async () => {
            await fetchCurrentTrack();
        }, 400);
    };
  
    return (
        <div className="flex justify-between h-[72px] text-white">
            <div className="w-3/12 flex space-x-4 items-center p-[7px]">
            <Image src={currentTrackInfo.image} alt={currentTrack.item.name} className="rounded" priority={true} width={60} height={60} style={{ width: 56, height: 'auto'}}  />
                <div className="flex flex-col justify-center">
                    <p className="text-[14px] font-medium">{currentTrackInfo.trackName}</p>
                    <p className="text-[10.5px] font-medium text-neutral-400">
                        {currentTrackInfo.artists.map((artist, index) => (
                            <span key={index}>{(index ? ', ' : '') + artist.name}</span>
                        ))}
                    </p>
                </div>
                <div>
                    {isTrackLiked ? (
                        <svg data-encore-id="icon" role="img" width="16" height="16" className="fill-[#1DCF5D]" aria-hidden="true" viewBox="0 0 16 16"><path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path></svg>
                    ) : (
                        <svg data-encore-id="icon" role="img" width="16" height="16"  className="fill-neutral-400" aria-hidden="true" viewBox="0 0 16 16"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>
                    )}
                </div>
            </div>
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
                        {currentTrackInfo.isPlaying ? (
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
            <div className="w-3/12 flex space-x-4 justify-end items-center p-[7px]">
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg>
                </button>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>
                </button>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>
                </button>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
                </button>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
                </button>
                <div className="items-center w-[93px] bg-[#4D4D4D] rounded-full h-1 dark:bg-gray-700">
                    <div className="bg-[#FFFFFF] hover:bg-[#1DB954] h-1 rounded-full w-4/6"></div>
                </div>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path></svg>
                </button>
                <button>
                    <svg className="fill-[#B2B2B2]" data-encore-id="icon" role="img" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg>
                </button>
            </div>
        </div>
    )
}