"use client";

import { Song } from "@/types";
// import useOnPlay from "@/hooks/useOnPlay";
import SongItem from "@/components/SongItem";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({
  songs
}) => {
//   const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="mt-5 uppercase tracking-widest text-xs text-neutral-400">
        No songs available.
      </div>
    )
  }

  return ( 
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-5
        mt-5
      "
    >
      {songs.map((item) => (
        <SongItem 
        onClick={() => {}}
          key={item.id} 
          data={item}
        />
      ))}
    </div>
  );
}
 
export default PageContent;