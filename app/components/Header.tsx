'use client'
import { signIn } from "next-auth/react";

export default function Header() {
    return (
        <>
            <div className="flex justify-between py-2 px-6">
                <div>

                </div>
                <div className="flex space-x-2 text-[15px]">
                    <button className="py-3 px-6 font-bold text-neutral-400">S&apos;inscrire</button>
                    <button onClick={() => signIn("spotify")} className="bg-neutral-50 rounded-full px-8 font-bold">Se connecter</button>
                </div>
            </div>
        </>
    )
}
