import Navbar from "./navbar";
import Navbardesc from "./navbardesc";
import Header from "./Header";
import SalonCard from "./saloncards";
import BeautySalonCards from "./Components/BeautySalonCards";
import CommentCards from "./Components/CommentCards";

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

  const CommentCardsData = [
    {
      id: 10,
      authorRating: 3.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
    {
      id: 5,
      authorRating: 4.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
    {
      id: 2,
      authorRating: 3.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
    {
      id: 3,
      authorRating: 4.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
    {
      id: 4,
      authorRating: 4.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
    {
      id: 6,
      authorRating: 4.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
    {
      id: 7,
      authorRating: 4.2,
      author: "میترا مولایی",
      text: "“ با قابلیت باشگاه مشتریان سالن۲۰ میتونم اطلاعاتِ مشتری ها رو داشته باشم و بهشون خدماتِ بهتر ارائه بکنم. با قابلیت باشگاه مشتریان سالن۲۰ میتونم.با قابلیت باشگاه مشتریان سالن۲۰ میتونم ”",
      profileImage: "/image/ProfileReviews.png",
      salonsname: "سالن زیبایی مریم مولایی",
      salonRating: 5.0,
      salonImage: "/image/beauty-salon.png",
      location: "تهران ،سعادت آباد",
      comments: 1760,
    },
  ];

  return (
    <div>
      <div>
        <Navbar searchTerms={searchTerms} />
        <Navbardesc />
      </div>
      <div className="px-[18px] flex flex-col justify-center">
        <Header services={services} LinkPages={LinkPages} />
        <BeautySalonCards beautySalonCardsData={beautySalonCardsData} />
        <SalonCard beautySalons={beautySalons} />
        <CommentCards CommentCardsData={CommentCardsData} />
      </div>
    </div>
  );
}
