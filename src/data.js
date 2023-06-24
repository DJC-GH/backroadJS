import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    rel: "noreferrer",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    rel: "noreferrer",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    rel: "noreferrer",
    icon: "fab fa-squarespace",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    city: "china",
    days: "6 days",
    price: "$2100",
  },

  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    city: "indonesia",
    days: "11 days",
    price: "$1400",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    city: "hong kong",
    days: "8 days",
    price: "$5000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    city: "kenya",
    days: "20 days",
    price: "$3300",
  },
];
