import Navbar from "./navbar";
import Navbardesc from "./navbardesc";
// import Header from "./Header";
// import Cards from "./Cards";
import SalonCard from "./saloncards";

export default function Home() {
  const searchTerms = ["کاشت ناخن", "ژلیش ناخن", "سعادت آباد"];

  const beautySalons = [
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
    {
      name: "سالن زیبایی مریم مولایی",
      rating: 0.5,
      reviews: 1076,
      location: "سعادت آباد، تهران",
      category: "آرایشگاه زنانه",
      imageUrl: "/image/saloncards.png",
    },
  ];

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

  const cardsData = [
    {
      image: "/1.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/2.png",
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
      image: "/3.png",
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
      image: "/1.png",
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
      image: "/2.png",
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
      image: "/3.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      services: [],
      comments: "۱۸۰ نظر",
    },
  ];

  return (
    < div >
      <div>
      <Navbar searchTerms={searchTerms} />
      <Navbardesc />
      </div>
      <div  className="flex flex-col p-[18px] justify-center rtl ">
      <SalonCard beautySalons={beautySalons} />
      {/* <Header services={services} LinkPages={LinkPages} />
      <Cards cardsData={cardsData} /> */}
    </div>
    </div>
  );
}
