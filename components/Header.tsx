"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const logout = async () => {
    // handle logout
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

  return (
    <div
      className={twMerge(
        ` h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className=" flex items-center justify-between w-full mb-4">
        <div className=" hidden md:flex gap-x-4 items-center">
          <button
            onClick={() => router.back()}
            className=" bg-black rounded-full items-center  justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={30} />
          </button>
          <button
            onClick={() => router.forward()}
            className=" bg-black rounded-full items-center  justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={30} />
          </button>
        </div>

        <div className=" flex md:hidden gap-x-2 items-center">
          <button className=" bg-white p-1 rounded-full items-center justify-center hover:opacity-75 transition">
            <HiHome className=" text-black" size={20} />
          </button>
          <button className=" bg-white p-1 rounded-full items-center justify-center hover:opacity-75 transition">
            <BiSearch className=" text-black" size={20} />
          </button>
        </div>

        <div className=" flex items-center gap-x-4 justify-between">
          {user ? (
            <div className=" flex items-center gap-x-5">
              <Button
                className=" bg-white text-black font-bold px-6 py-2"
                onClick={logout}
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className=" rounded-full"
              >
                <FaUserAlt className=" text-black" size={16} />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className=" bg-transparent text-neutral-300 font-medium"
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className=" bg-white text-black font-bold px-6 py-2"
                >
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
