import Navbar from "./navbar";
import Navbardesc from "./navbardesc";
import Header from "./Header";
import Cards from "./Cards";
import SalonCard from "./saloncards";

import BeautySalonCards from "./Components/BeautySalonCards";
import Header from "./Header";

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

  const beautySalonCardsData = [
    {
      image: "/image/beauty-salon.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 6,
      services: [],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/fingernail.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      id: 7,
      services: [],
      comments: "۱۸۰ نظر",
    },
    {
      image: "/image/salon-hair.png",
      title: "سالن سارا فرهادی",
      rating: "۴.۲",
      location: "تهران، سعادت آباد، بلوار دریا",
      id: 8,
      services: [],
      comments: "۱۸۰ نظر",
    },
  ];

  return (
    <div className="px-[18px] flex flex-col justify-center rtl ">
      <Header services={services} LinkPages={LinkPages} />
      <BeautySalonCards beautySalonCardsData={beautySalonCardsData} />
    </div>
  );
}
