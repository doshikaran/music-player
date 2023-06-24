"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";
import { Song } from "@/types";

interface SideBarProps {
  children: React.ReactNode;
  songs: Song[];
}

const SideBar: React.FC<SideBarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search", // active when pathname is not /search
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className=" flex h-full">
      <div className=" hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2">
        <Box>
          <div className=" flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route) => (
              <SideBarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className=" overflow-y-auto h-full">
          <Library songs={songs}/>
        </Box>
      </div>

      <main className="  h-full flex-1 overflow-y-auto py-3 px-2">{children}</main>
    </div>
  );
};

export default SideBar;
