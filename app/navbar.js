import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ searchTerms }) => {
  return (
    <div className="flex relative w-[100%] h-20 p-[18px] shadow sm:hidden">
      <div className="flex relative w-[100%] px-[18px] rounded-full border border-gray-300">
        <div className="flex justify-between w-[100%] items-center ">
          <Link href="#">
            <Image
              src="/svg/searchmob.svg"
              alt="salon20 search logo"
              width={26}
              height={26}
            />
          </Link>
          <div className="flex flex-row w-[70%] text-gray-400">
            <Link
              href="#"
              className=" w-[100%] truncate ${index === 0 ? 'font-bold' : ''}"
            >
              {searchTerms.join(" . ")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
