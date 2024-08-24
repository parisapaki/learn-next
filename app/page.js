import Cards from "./Cards";
import Header from "./Header";

export default function Home() {
  const services = [
    "کاشت ناخن",
    "ژلیش ناخن",
    "طراحی ناخن",
    "لمینت ناخن",
    "ترمیم ناخن",
    "کاشت مژه",
    "ترمیم مژه",
    "اکستنشن مژه",
    "لیفت مژه",
  ];
  const LinkPages = ["خانه", "کاشت ناخن", "ژلیش ناخن سعادت آباد"];

  const cardsDataWithServices = [
 
    {
      image: "/image/beauty-salon.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
      ],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/salon-hair.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
      ],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/fingernail.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
      ],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/beauty-salon.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
        {
          service: "ژلیش ناخن",
          price: "۴۵۰,۰۰۰ تومان",
          time: 45,
        },
      ],
      comments: "۱۸۰ نظر",
    },
  ];
  const cardsDataWithoutServices = [
    {
      image: "/image/salon-hair.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/fingernail.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/salon-hair.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [],
      comments: "۱۸۰ نظر",
    },

  ]

  return (
    <div className="px-[18px] flex flex-col justify-center rtl ">
      <Header services={services} LinkPages={LinkPages} />
      <div className="inline">
      <Cards cardsData={cardsDataWithServices}  className="inline"/>
      <Cards cardsData={cardsDataWithoutServices} className="inline"/>
      <div className="flex justify-center my-12">
        <button className="border border-[#7E7E7E] text-[#7E7E7E] rounded-lg px-3 py-1 mt-4">
          مشاهده بیشتر
        </button>
      </div>
       </div>
    </div>
  );
}
