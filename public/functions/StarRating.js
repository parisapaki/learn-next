import React from "react";
import Image from "next/image";

export default function StarRating({ rating }) {
  const maxStars = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxStars - filledStars;

  return (
    <div className="flex items-center">
      <span className="text-sm font-semibold pe-1">{rating}</span>
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Image
            key={`empty-${index}`}
            src="/svg/empty-star.svg"
            alt="empty star"
            width={19}
            height={19}
          />
        ))}
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <Image
            key={`filled-${index}`}
            src="/svg/star.svg"
            alt="filled star"
            width={20}
            height={20}
          />
        ))}
    </div>
  );
}
