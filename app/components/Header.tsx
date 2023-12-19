'use client'
import { signIn, signOut, useSession  } from "next-auth/react";
import Image from "next/image";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

export default function Header() {
    const { data: session } = useSession();
    const userProfileImage = session?.user?.image;
    useEffect(() => {
        initFlowbite();
      }, []);

    if (session) {
        return (
            <div className="flex justify-between py-4 px-6">
                <div></div>
                <div className="flex items-center space-x-2 text-white">
                    <div className="flex hover:scale-105 ">
                        <button className="flex bg-[#121212] pl-3 pr-4 py-[6px] rounded-full items-center space-x-1">
                            <svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg>
                            <p className="font-bold text-[14px]">Installer l&apos;appli</p>
                        </button>
                    </div>
                    <button className="bg-[#121212] hover:text-neutral-200 hover:cursor-default text-neutral-400 p-2 rounded-full"><svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" className="Svg-sc-ytk21e-0 kPpCsU t93PZphItuM19kPhX7tC" viewBox="0 0 16 16"><path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path></svg></button>
                    <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm hover:cursor-default rounded-full md:me-0 " type="button">
                        <span className="sr-only">Open user menu</span>
                        {userProfileImage ? (
                            <Image
                                className="w-8 h-8 p-1 bg-[#121212] rounded-full"
                                src={userProfileImage} 
                                alt="Photo de profil" 
                                width={50}
                                height={50}
                            />
                            ):(
                                <Image
                                className="w-8 h-8 p-1 bg-[#121212] rounded-full"
                                src="/profil"
                                alt="Photo de profil" 
                                width={50}
                                height={50}
                            />
                        )}
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdownAvatar" className="z-10 hidden bg-neutral-800 rounded w-48">
                        <ul className="py-1 text-[13px] text-neutral-200 font-medium" aria-labelledby="dropdownUserAvatarButton">
                            <li className="flex justify-between hover:bg-neutral-700 mx-1 rounded-sm items-center px-4">
                                <a href="#" className="block  py-2 hover:cursor-default">Compte</a>
                                <svg data-encore-id="icon" role="img" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-neutral-700 mx-1 rounded-sm hover:cursor-default">Profil</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-neutral-700 mx-1 rounded-sm hover:cursor-default">Préférences</a>
                            </li>
                            <hr className="h-px bg-neutral-700 border-0 mx-1"></hr>

                            <li>
                                <a className="block px-4 py-2 hover:bg-neutral-700 mx-1 rounded-sm hover:cursor-default" onClick={() => signOut()}>Déconnexion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        
    }
    return (
        <>
            <div className="flex justify-between py-2 px-6">
                <div>
                </div>
                <div className="flex space-x-2 text-[15px]">
                    <button onClick={() => signIn("spotify")} className="py-3 px-6 font-bold text-neutral-400">S&apos;inscrire</button>
                    <button onClick={() => signIn("spotify")} className="bg-neutral-50 rounded-full px-8 font-bold">Se connecter</button>
                </div>
            </div>
        </>
    )
}
