"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}
const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };
  return (
    <div
      onClick={handleClick}
      className=" flex items-center gap-x-5 cursor-pointer hover:bg-neutral-800/50 w-full p-3 rounded-md"
    >
      <div className=" relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          className=" object-cover"
          src={imageUrl || "/images/liked.png"}
          alt="media type"
        />
      </div>
      <div className=" flect flex-col gap-y-2 overflow-hidden">
        <p>{data.title}</p>
        <p className=" text-xs text-neutral-400 tracking-wider">
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
