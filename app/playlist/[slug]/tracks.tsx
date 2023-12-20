'use client'
import Image from 'next/image';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Playlist, Track } from "@/types"
import startPlayback from "@/actions/startPlayback";


interface PlayerControlsProps {
  playlist: Playlist;
}

export default function PlayerControls({ playlist }: PlayerControlsProps) {

  const tracks = playlist.tracks.items;

  const handleTrackClick = async (track: Track) => {
    try {
      await startPlayback(track.uri);
    } catch (error) {
      console.error('Erreur lors du démarrage de la lecture :', error);
    }
  };

  return (
    <>
      <div className="border-t border-neutral-700 pt-6">
        {tracks.map((track, index) => (
          <div key={index} onDoubleClick={() => handleTrackClick(track.track)} className="py-2 text-neutral-200 hover:bg-[#2A2A2A] flex w-full justify-between rounded items-center px-7 ">
            <div className=" w-5/12 flex space-x-4 items-center ">
              <p>{index + 1}</p>
              <Image src={track.track.album.images[0]?.url} alt={track.track.name} className="rounded" priority={true} width={45} height={45} style={{ width: 40, height: 'auto'}}  />
              <div className="flex flex-col">
                <p className="text-neutral-50">{track.track.name}</p>
                <p className="text-neutral-300">{track.track.artists.map((artist, artistIndex) => (
                  <span key={artistIndex}>{artist.name}</span>
                ))}
                </p>
              </div>
            </div>
            <div className="w-2/12">
              {track.track.album.name}
            </div>
            <div className="w-2/12">
              {formatDistanceToNow(new Date(track.added_at), { addSuffix: true })}
            </div>
            <div className="w-1/12 flex justify-end">
            {`${Math.floor(track.track.duration_ms / 60000)}:${(track.track.duration_ms % 60000 / 1000).toFixed(0).padStart(2, '0')}`}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
