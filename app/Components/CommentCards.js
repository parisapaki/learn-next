import React from "react";
import Image from "next/image";
import StarRating from "@/public/functions/StarRating";

export default function CommentCards({ CommentCardsData }) {
  return (
    <div className="px-4 rtl">
      <h2 className="text-3xl font-bold text-center mb-8">
        نظرات <span className="text-[#7351E7]">آرایشگران</span> و
        <span className="text-[#7351E7]">سالن های زیبایی کاشت ناخن</span> در
        سعادت آباد
      </h2>
      <div className="overflow-x-auto custom-scrollbar">
        <ul className="flex my-6 space-x-5">
          {CommentCardsData.map((CommentCardData) => (
            <li
              key={CommentCardData.id}
              className="bg-[#F4F4F4] shadow-lg rounded-xl w-[380px] flex-shrink-0"
            >
              <div className="flex justify-between p-4">
                <div className="flex items-center">
                  <Image
                    src={CommentCardData.profileImage}
                    alt="#"
                    width={48}
                    height={48}
                  />
                  <span className="font-semibold text-sm ps-2 whitespace-nowrap">
                    {CommentCardData.author}
                  </span>
                </div>
                <StarRating rating={CommentCardData.authorRating} />
              </div>

              <p className="mt-2 p-4">{CommentCardData.text}</p>
              <h3 className="text-lg font-semibold p-4">
                {CommentCardData.salonName}
              </h3>
              <div className="bg-white px-5 py-8 flex justify-evenly flex-shrink-0">
                <Image
                  src={CommentCardData.salonImage}
                  alt="#"
                  width={500}
                  height={300}
                  className="w-28 h-24 border rounded-xl object-cover my-auto"
                />
                <div className="ps-3 space-y-2">
                  <span className="font-semibold whitespace-nowrap">
                    {CommentCardData.salonsname}
                  </span>
                  <div className="flex justify-stretch">
                    <span>{CommentCardData.salonRating}</span>
                    <Image src="/svg/star.svg" alt="#" width={20} height={20} />
                    <span>({CommentCardData.comments})</span>
                  </div>
                  <div className="text-[#7E7E7E]">
                    {CommentCardData.location}
                  </div>
                  <button className="border rounded-lg px-5 py-2">
                    آرایشگاه زنانه
                  </button>
                </div>
              </div>
              <button className="w-full bg-[#E7E7FF] text-[#7351E7] py-2 rounded-md rounded-t-none block font-semibold">
                مشاهده سالن
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
