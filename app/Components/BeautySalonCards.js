import React from "react";
import BeautySalonCardsContent from "./BeautySalonCardsContent";

export default function BeautySalonCards({ beautySalonCardsData }) {
  const cardsDataWithServices = beautySalonCardsData.filter(
    (card) => card.services.length > 0
  );
  const cardsDataWithoutServices = beautySalonCardsData.filter(
    (card) => card.services.length === 0
  );

  return (
    <>
      <BeautySalonCardsContent beautySalonCardsData={cardsDataWithServices} />
      <BeautySalonCardsContent
        beautySalonCardsData={cardsDataWithoutServices}
      />
      <div className="flex justify-center my-12">
        <button className="border border-[#7E7E7E] text-[#7E7E7E] font-semibold rounded-lg px-4 py-2 mt-4">
          مشاهده بیشتر
        </button>
      </div>
    </>
  );
}
