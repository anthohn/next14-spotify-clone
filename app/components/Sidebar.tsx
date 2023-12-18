import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import getPlaylists from "@/actions/getPlaylists";
import Image from "next/image";


export default async function Sidebar() {

    const session = await getServerSession();
    if (!session || !session.user) {
      redirect('/api/auth/signin')    
    }
    const playlists = await getPlaylists();

    return (
        <>
            <div className="flex flex-col w-[420px] rounded-lg text-[15px] text-neutral-400">
                <div className="flex flex-col py-2 px-2 font-medium rounded-lg bg-neutral-950">
                    <Link href="/" className="flex space-x-5 items-center py-3 px-4 font-semibold hover:text-gray-100">
                        <svg data-encore-id="icon" role="img" width="24" height="24" fill="currentColor" aria-hidden="true" className="Svg-sc-ytk21e-0 iYxpxA home-icon" viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>
                        <span>Accueil</span>
                    </Link>
                    <Link href="/" className="flex space-x-5 items-center py-3 px-4 font-semibold hover:text-gray-100">
                        <svg data-encore-id="icon" role="img" width="24" height="24" fill="currentColor" aria-hidden="true" className="Svg-sc-ytk21e-0 iYxpxA search-icon" viewBox="0 0 24 24"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>                    <span className="ms-3">Rechercher</span>
                    </Link>
                </div>

                <div className="flex flex-col space-y-2 font-medium rounded-t-lg mt-2 bg-neutral-950">
                    <div className="flex justify-between py-3 px-4">
                        <Link href="/" className="flex space-x-3 items-center px-2 font-semibold  hover:text-gray-100">
                            <svg data-encore-id="icon" role="img" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 iYxpxA"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                            <span>Bibliothèque</span>
                        </Link>
                        <div className="flex space-x-2">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                            <button className="hover:bg-neutral-800 px-2 py-2 rounded-full">
                                <svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                            </button>
                            <button className=" hover:bg-neutral-800 px-2 py-2 rounded-full">
                                <svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-2 px-4 pb-2 items-center text-[13px] text-neutral-100 w-max">
                        <button className="bg-neutral-800 px-3 py-[6px] rounded-full">Playlists</button>
                        <button className="bg-neutral-800 px-3 py-[6px] rounded-full">Artistes</button>
                        <button className="bg-neutral-800 px-3 py-[6px] rounded-full">Albums</button>
                        <button className="bg-neutral-800 px-3 py-[6px] rounded-full">Poodcasts</button>
                    </div>
                </div>

                <div className="pl-2 pr-2 flex flex-col space-y-2 flex-grow rounded-b-lg overflow-y-auto bg-neutral-950 scrollbar scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500">
                    <div className="flex justify-between items-center pl-2">
                        <button className="hover:bg-neutral-800 px-2 py-2 rounded-full">
                            <svg data-encore-id="icon" role="img" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
                        </button>
                        <button className="flex space-x-1 hover:text-neutral-200 pl-2 py-2 hover:scale-105">
                            <span className="text-[13px]">Récents</span>
                            <svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" ><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
                        </button>
                    </div>
                    <div>
                        {playlists.map((playlist) => (
                            <Link 
                                href={`/playlist/${playlist.id}`} rel="noopener noreferrer" key={`${playlist.id}`} 
                                className="flex hover:bg-neutral-900 w-full rounded items-center py-2 space-x-3"> 
                                <Image 
                                    src={playlist.images[0]?.url} alt={playlist.name} 
                                    className="rounded ml-2" 
                                    priority={true} 
                                    width={45} 
                                    height={45} 
                                    style={{ width: 48, height: 'auto'}} 
                                />
                                <div className="flex-grow flex-col">
                                    <p className="flex-grow font-semibold text-sm text-neutral-100"> {playlist.name}</p>
                                <div className="flex space-x-2 font-normal">
                                    <p>Playlist</p>
                                    <p> • </p>
                                    <p>{ playlist.owner.display_name }</p>
                                </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}
