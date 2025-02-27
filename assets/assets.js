import logo from "./logowit.png";
import download from "./download-icon.png";
import hero from "./hero-pic.png";
import brand from "./brand-logo.png";
import layout from "./layout-logo.png";
import motion from "./motion-logo.png";
import linkedin from "./linkedin-logo.png";
import aboutimg from "./about-image.png";
import vela_main from "./Bar Vela/Barvelakaart2.jpg";
import boek_main from "./Boek KKF/Immerseel_front.jpg";
import cycle_main from "./Cycle Stuio/cycle Studio.jpg";
import argenta_main from "./School projecten/argenta.png";
import cafeina from "./cafeina.png";
export const assets = {
  cafeina,
  argenta_main,
  cycle_main,
  boek_main,
  vela_main,
  aboutimg,
  linkedin,
  layout,
  motion,
  brand,
  hero,
  download,
  logo,
};

export const navData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Me ",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Works",
    url: "#works",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
];

export const ServicesData = [
  {
    image: assets.brand,
    title: "Branding & Logo Design",
    description: "Shaping unique brand identities through strategic design.",
  },
  {
    image: assets.layout,
    title: "Graphic & Layout Design",
    description:
      "Crafting visually compelling layouts that enhance communication.",
  },
  {
    image: assets.motion,
    title: "Motion & Social Media Design",
    description:
      "Creating engaging motion graphics and digital content for impact.",
  },
];

export const WorksData = [
  {
    id: "Bar-Vela",
    image: assets.vela_main,
    title: "Bar Vela - Bussines Card",
    Link: "/",
  },
  {
    id: "Immersive-book ",

    image: assets.boek_main,
    title: "Book Design",
    Link: "/",
  },
  {
    id: "Cycle-Studio",

    image: assets.cycle_main,
    title: "Branding & Logo Design",
    Link: "/",
  },
  {
    id: "Cafeina",

    image: assets.cafeina,
    title: "Poster Design",
    Link: "/",
  },
];

//add minidesc for porfolio page and longdesc for dynamic page 

export const portfolioData = [
  {
    id: "bar-vela",
    title: "Bar Vela - Business Card",
    image: assets.vela_main,
    longDesc:
      "Bar Vela is a bar located in Antwerp, Belgium. The design of the business card is inspired by the bar's interior and the logo design. The card is designed to be minimalistic and elegant, with a touch of modernity.",
  },
  {
    id: "Immersive-book",
    title: "Immersive-book",
    image: assets.boek_main,
    longDesc:
      "This is a book cover design for a book titled 'Immersive'. The design is inspired by the book's theme, which is about the immersive experience of reading. The cover features a minimalist design with bold typography that reflects the book's content.",
  },
  {
    id: "cycle-studio",
    title: "Cycle-Studio",
    image: assets.cycle_main,
    longDesc:
      "Cycle Studio is a cycling studio located in Antwerp, Belgium. The logo design is inspired by the studio's interior and the concept of cycling. The design is modern and minimalistic, with a bold and dynamic look that reflects the studio's brand identity.",
  },
  {
    id: "cafetina",
    title: "Cafeina",
    image: assets.cafeina,
    longDesc:
      "Cafeina is a coffee shop located in Antwerp, Belgium. The poster design is inspired by the shop's interior and the concept of coffee. The design is modern and minimalistic, with a touch of vintage style that reflects the shop's brand identity.",
  },
  // Add more projects here...
];
