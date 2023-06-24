"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}
const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      className=" relative group cursor-pointer flex flex-col items-center justify-center p-5 rounded-lg overflow-hidden gap-x-5 bg-neutral-400/5 hover:bg-neutral-400/10 transition"
      onClick={() => onClick(data.id)}
    >
      <div className=" relative aspect-square w-full h-full rounded-lg overflow-hidden">
        <Image
          src={imagePath || "/images/liked.png"}
          alt="image"
          fill
          className=" object-cover"
        />
      </div>
      <div className=" flex flex-col items-start w-full pt-1 gap-x-2">
        <p className=" uppercase tracking-widest">{data.title}</p>
        <p className=" text-sm tracking-widest truncate text-neutral-600 pb-3">
          By {data.author}
        </p>
      </div>
      <div className=" absolute right-5 bottom-20">
        <PlayButton/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default SongItem;
