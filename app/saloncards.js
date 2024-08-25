import Image from "next/image";

const toPersianDigits = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

const SalonCard = ({ beautySalons }) => {
  return (
    <div className="overflow-x-hidden mx-4 ">
      <h1 className="text-2xl my-4 font-bold text-right mx-3 truncate ">
      !   برای وقت دهی تماس بگیرید 
      </h1>
      <div className="flex overflow-x-auto mx-2 custom-scrollbar ">
        {beautySalons.map((salon, idx) => (
          <div
            key={idx}
            className="min-w-[250px] max-w-xs bg-white rounded-lg border border-gray-300 overflow-hidden my-10 mx-2"
          >
            <div className="relative">
              <Image 
                src={salon.imageUrl}
                alt={salon.name}
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
            <div className="p-4 rtl text-right">
              <h3 className="text-lg font-semibold">{salon.name}</h3>
              <div className="flex justify-end mt-2 text-right rtl">
                <span className="text-gray-600">
                  ({toPersianDigits(salon.reviews)})
                </span>
                <span className="text-yellow-500">★</span>
                <span className="text-black">
                  {toPersianDigits(salon.rating)}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{salon.location}</p>
              <button className="mt-4 w-full py-2 bg-white rounded-lg border border-gray-300">
                {salon.category}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonCard;

