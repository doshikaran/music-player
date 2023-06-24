"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import { useState } from "react";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}
const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }
    player.setId(nextSong);
  };
  const onPlayPrev = () => {
    if (player.ids.length === 0) {
      return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const prevSong = player.ids[currentIndex - 1];

    if (!prevSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }
    player.setId(prevSong);
  };

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 h-full">
      <div className=" flex w-full justify-start">
        <div className=" flex items-center gap-x-5">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className=" flex md:hidden col-auto w-full justify-end items-center">
        <div className=" h-9 w-9 rounded-full p-2 items-center justify-center bg-white cursor-pointer">
          <Icon size={25} className=" text-black" />
        </div>
      </div>

      <div className=" hidden h-full w-full gap-x-5 md:flex justify-center items-center max-w-[770px]">
        <AiFillStepBackward
          onClick={onPlayPrev}
          size={25}
          className=" text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={() => {}}
          className="  flex h-9 w-9 rounded-full p-2 items-center justify-center bg-white cursor-pointer"
        >
          <Icon size={25} className=" text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={25}
          className=" text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className=" hidden md:flex w-full justify-end pr-3">
        <div className=" flex items-center gap-x-3 w-[120px]">
          <VolumeIcon
            onClick={() => {}}
            size={24}
            className=" cursor-pointer"
          />
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default PlayerContent;
