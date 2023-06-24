import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./component/LikedContent";

export const revalidate = 0;
const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div className=" bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className=" mt-20">
          <div className=" flex flex-row gap-x-5 items-center ">
            <div className=" relative h-32 w-32">
              <Image
                fill
                alt="playlist"
                className="object-cover rounded-lg"
                src="/images/liked.png"
              />
            </div>
            <div className=" flex flex-col gap-y-3 mt-5 ">
                <p className=" text-xs font-light tracking-widest uppercase">Playlist</p>
                <h1 className=" text-3xl text-white font-bold tracking-widest uppercase">Liked Songs</h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};
export default Liked;
