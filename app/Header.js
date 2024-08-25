import Link from "next/link";
import Image from "next/image";

export default function Header({ services, LinkPages }) {
  return (
    <div className="pt-7 truncate">
      <Image
        src="/svg/20.svg"
        alt=""
        width={50}
        height={50}
        className="rounded-lg m-1 p-1.5 inline"
      />
      <div className="text-sm inline m-2 py-8">
        {LinkPages.map((item, index) => (
          <Link href="#" key={index}>
            {item}
            {index < LinkPages.length - 1 && <span className="mx-1">·</span>}
          </Link>
        ))}
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-bold mx-1 my-2 block md:inline">
          بهترین سالن‌های کاشت ناخن شهر تهران
        </h1>
        <Link href="#" className="text-[#7351E7] text-sm m-1">
          (مشاهده در نقشه)
        </Link>
      </div>
      <div className="flex md:justify-around space-x-3 p-3 my-6 overflow-x-scroll custom-scrollbar whitespace-nowrap">
        {services.map((service, index) => (
          <button
            key={index}
            className={`font-bold px-4 py-2 rounded-full ${
              index === 0 ? "bg-[#251756] text-white" : "text-[#251756]"
            }`}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
}
