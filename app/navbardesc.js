import React from "react";
import Image from "next/image";

const Navbardesc = () => {
  return (
    <div className="md:flex relative w-full h-20 p-[20px] shadow hidden ">
      <div className="flex w-[100%] justify-between items-center">
        <Image
          src="/svg/salon20logo.svg"
          alt="salon20 logo"
          width={120}
          height={120}
        />

        <div className="flex items-center rounded-full p-3 mx-2 border border-gray-300 text-gray-600">
          <input
            type="text"
            placeholder="کاشت ناخن"
            className="flex-grow rtl text-right"
          />
          <Image
            src="/svg/search.svg"
            alt="salon20 logo"
            width={20}
            height={20}
          />

          <span className="text-gray-400 mx-2">|</span>
          <input
            type="text"
            placeholder="سعادت اباد"
            className="flex-grow rtl text-right"
          />

          <span className="text-gray-400 mx-2">|</span>
          <input
            type="text"
            placeholder="تهران"
            className="flex-grow rtl text-right"
          />
          <Image
            src="/svg/location.svg"
            alt="salon20 logo"
            width={20}
            height={20}
          />
        </div>

        <button className="flex items-center p-2 mx-2 rounded-full border border-gray-300 ">
          برای آرایشگران
          <Image
            src="/svg/scissor.svg"
            alt="scissorlogo"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbardesc;
