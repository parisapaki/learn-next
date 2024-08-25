import React from "react";
import Image from "next/image";

export default function BeautySalonCardsContent({ beautySalonCardsData }) {
  const FormatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const persianHours = hours.toLocaleString("fa-IR");
    const persianMinutes = minutes.toLocaleString("fa-IR");
    return `${hours > 0 ? `${persianHours} ساعت` : ""} ${
      minutes > 0 ? `${persianMinutes} دقیقه` : ""
    }`.trim();
  };
  return (
    <div className="pb-4 flex flex-col">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {beautySalonCardsData.map(
          ({ image, title, rating, location, comments, services, id }) => (
            <li
              key={id}
              className="rounded-lg md:shadow-lg md:overflow-hidden p-4 md:p-0"
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="w-full h-72 object-cover rounded-lg md:rounded-b-none"
              />
              <div className="flex justify-between p-3 pt-5 pb-0">
                <h3 className="text-lg font-bold truncate">{title}</h3>
                <span className="flex items-center">
                  {rating}
                  <Image
                    src="/svg/star.svg"
                    alt=""
                    width={500}
                    height={300}
                    layout="responsive"
                    className="inline ps-1"
                  />
                </span>
              </div>
              <div className="flex justify-between p-2 pb-5 truncate">
                <span className="flex truncate">
                  <Image
                    src="/svg/location.svg"
                    alt=""
                    width={500}
                    height={300}
                    layout="responsive"
                    className="inline pe-2"
                  />
                  {location}
                </span>
                <span className="text-[#7E7E7E]">({comments})</span>
              </div>
              {services.length > 0 && <hr />}
              <div className="mt-2 text-gray-700 p-2">
                {services?.map(({ service, time, price }, i) => (
                  <div key={i} className="flex justify-between mb-2">
                    <div className="p-1 font-bold truncate">
                      {service}
                      <span className="block text-sm font-normal p-1 text-[#7E7E7E]">
                        {FormatTime(time)}
                      </span>
                    </div>
                    <span className="p-1 font-bold truncate ltr">{price}</span>
                  </div>
                ))}
              </div>
              {services.length > 0 && (
                <button className="text-[#7351E7] p-2 pb-4 font-bold">
                  مشاهده بیشتر
                </button>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
