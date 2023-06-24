"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}
const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className=" flex flex-col w-full px-6 gap-y-3 text-neutral-400">
        No songs found
      </div>
    );
  }
  return (
    <div className=" flex flex-col w-full px-6 gap-y-3">
      {songs.map((song) => (
        <div className=" flex items-center gap-x-5 w-full" key={song.id}>
          <div className=" flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};
export default SearchContent;