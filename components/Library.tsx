"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";

interface LibraryProps {
  songs: Song[];
}
const Library: React.FC<LibraryProps> = ({songs}) => {
  const subscribeModal = useSubscribeModal()
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
  const onPlay = useOnPlay(songs)
  const onClick = () => {
    // handle upload
    if (!user) {
      return authModal.onOpen();
    }
    if(!subscription) {
      return subscribeModal.onOpen();
    }
    return uploadModal.onOpen();
  };


  return (
    <div className=" flex flex-col">
      <div className=" flex items-center justify-between px-5 pt-5">
        <div className=" inline-flex items-center gap-x-4">
          <TbPlaylist className=" text-neutral-400" size={22} />
          <p className=" text-neutral-400 text-sm uppercase tracking-widest font-medium">
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={18}
          className=" text-neutral-400 hover:text-white transition cursor-pointer"
        />
      </div>
      <div className=" flex flex-col mt-4 px-5">
        {songs.map((item) => (
          <MediaItem
          onClick={(id: string) => onPlay(id)} 
          key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
