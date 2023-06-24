"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
  songs: Song[];
}
const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className=" text-neutral-400 flex flex-col gap-y-3 w-full px-6">
        No liked songs.
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-y-3 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className=" flex items-center gap-x-5 w-full">
          <div className=" flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};
export default LikedContent;