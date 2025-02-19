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
    image: assets.vela_main,
    title: "Bar Vela - Bussines Card",
    Link: "/",
  },
  {
    image: assets.boek_main,
    title: "Branding & Logo Design",
    Link: "/",
  },
  {
    image: assets.cycle_main,
    title: "Branding & Logo Design",
    Link: "/",
  },
  {
    image: assets.cafeina,
    title: "Branding & Logo Design",
    Link: "/",
  },
];
