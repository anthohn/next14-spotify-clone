import getPlaylist from "@/actions/getPlaylist";
import Image from 'next/image';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default async function TopTracksPage({params} : {params : { slug: string }}) {

  const playlist_id = params.slug
  const playlist = await getPlaylist(playlist_id);
  const tracks = playlist.tracks.items;

  return (
    <>
      <title>{`${playlist.name} - playlist by ${playlist.owner.display_name}`}</title>
      <div className='flex flex-col w-full rounded-lg overflow-y-auto scrollbar scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500'>
        <div className="flex px-6 py-5 w-full space-x-5 ">
          <Image src={playlist.images[0]?.url} alt={playlist.name} className="rounded" priority={true} width={750} height={750} style={{ width: 230, height: 'auto'}}  />
          <div className='flex flex-col  justify-end'>
            <p className="text-neutral-200 text-sm">Playlist</p>
            <p className="text-neutral-100 text-[90px] font-bold">{playlist.name}</p>
            <div className='flex space-x-1 items-center text-[13px]'>
              <p className="text-neutral-100  font-bold">{playlist.owner.display_name}</p>
              <p className="text-neutral-100">•</p>
              <p className="text-neutral-100">{playlist.followers.total} like</p>
              <p className="text-neutral-100">•</p>
              <p className="text-neutral-100">{playlist.tracks.total} titres</p>
            </div>
          </div>
        </div>
        <div className="relative p-5 bg-gradient-to-b from-neutral-900 to-neutral-600 flex-grow ">
          <div className=" w-full p-2 flex justify-between">
            <button className="bg-[#1FDF64] p-4 rounded-full">
              <svg data-encore-id="icon" role="img" width="22" height="22" aria-hidden="true" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
            </button>
            <button className="flex space-x-1 text-neutral-200 hover:text-neutral-200 pl-2 py-2 items-center">
              <span className="text-[13px]">Liste</span>
              <svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" ><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
            </button>
          </div>
          <div className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <div className="flex text-neutral-400 pt-6 pb-2 w-full justify-between items-center px-7">
              <div className="flex space-x-3 w-5/12 ">
                <p className="">#</p>
                <p>Titre</p>
              </div>
              <p className="w-2/12">Album</p>
              <p className="w-2/12">Date d&apos;ajout</p>
              <div className="w-1/12 flex justify-end">
                <svg data-encore-id="icon" role="img" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" ><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>
              </div>
            </div>
            <div className="border-t border-neutral-700 pt-6">
              {tracks.map((track, index) => (
                <div key={index} className="py-2 text-neutral-200 hover:bg-[#2A2A2A] flex w-full justify-between rounded items-center px-7 ">
                  <div className=" w-5/12 flex space-x-4 items-center ">
                    <p>{index + 1}</p>
                    <Image src={track.track.album.images[0]?.url} alt={track.track.name} className="rounded" priority={true} width={45} height={45} style={{ width: 40, height: 'auto'}}  />
                    <div className="flex flex-col">
                      {track.track.name}
                      <p className="text-neutral-500">{track.track.artists.map((artist, artistIndex) => (
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
          </div>
        </div>
      </div>       
    </>
  );
}
