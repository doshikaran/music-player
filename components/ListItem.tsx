"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href); //add authentication before you push
  };
  return (
    <button
      onClick={onClick}
      className="
        relative 
        group 
        flex 
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        pr-4
        "
    >
      <div className=" min-h-[64px] min-w-[64px] relative">
        <Image className=" object-cover" fill src={image} alt="image" />
      </div>
      <p className=" truncate font-medium py-5 tracking-wider text-sm">
        {name}
      </p>
      <div className=" flex items-center justify-center absolute transition right-5 rounded-full bg-green-500 p-3 drop-shadow-md opacity-0 group-hover:opacity-100 hover:scale-100">
        <FaPlay className=" text-black" size={18} />
      </div>
    </button>
  );
};

export default ListItem;
