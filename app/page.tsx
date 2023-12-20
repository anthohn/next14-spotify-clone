import getUserShows from "@/actions/getUserShows";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const userShows = await getUserShows();

  return (
    <>
      <div className="px-6">
        <div>
          <h1 className="text-white text-[28px] font-extrabold">Bonjour</h1>
        </div>
        <div className="mt-48">
          <h1 className="text-white text-[20px] font-extrabold pb-5">Vos émissions</h1>
          <div className="flex space-x-6">
          {userShows.map((userShow) => (
            <Link 
              href={`/show/${userShow.show.id}`}
              rel="noopener noreferrer" 
              key={userShow.show.id} 
              className="bg-[#181818] hover:bg-[#252525] p-4 rounded-lg w-[183px] h-[264px] flex flex-col space-y-4"
            > 
              <div className="w-full flex justify-center">
                <Image 
                  src={userShow.show.images[0].url} 
                  alt={userShow.show.name} 
                  className="rounded-md" 
                  priority={true} 
                  width={150} 
                  height={150}
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <p className="line-clamp-1 text-[15px] font-bold text-neutral-100">{userShow.show.name}</p>
                <p className="text-sm text-neutral-400">{userShow.show.publisher}</p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
