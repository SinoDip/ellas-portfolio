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
import cycle_main from "./Cycle Stuio/cycle4.jpg";
import argenta_main from "./school3.png";
import school1 from "./school1.jpg";
import school2 from "./school2.png";
import school4 from "./school4.jpg";
import cafeina3 from "./cafeina3.png";
import cafeina1 from "./cafeina1.jpg";
import cafeina2 from "./cafeina2.jpg";
import Vela1 from "./Bar Vela/Barvela1.jpg";
import Vela2 from "./Bar Vela/Barvelakaart4.jpg";
import boek1 from "./Boek KKF/Immerseel3.jpg";
import boek2 from "./Boek KKF/Immerseel2.jpg";
import cycle1 from "./Cycle Stuio/cycle1.jpg";
import cycle2 from "./Cycle Stuio/cycle2.jpg";
import cycle3 from "./Cycle Stuio/cycle3.jpg";
import cycle5 from "./Cycle Stuio/cycle5.jpg";
import cycle6 from "./Cycle Stuio/cycle6.jpg";
import cycle7 from "./Cycle Stuio/cycle7.jpg";
import cycle8 from "./Cycle Stuio/cycle8.jpg";
import cycle9 from "./Cycle Stuio/cycle9.jpg";
import cycle10 from "./Cycle Stuio/cycle10.jpg";
import lisanne1 from "./lisanne1.jpg";
import lisanne2 from "./lisanne2.jpeg";
import lisanne3 from "./lisanne3.jpg";
import lisanne4 from "./lisanne4.jpg";
import lisanne5 from "./lisanne5.jpg";
import lisanne6 from "./lisanne6.jpg";
import louise1 from "./louise1.jpg";
import louise2 from "./louise2.jpg";
import willemstad1 from "./willemstad1.png";
import willemstad2 from "./willemstad2.png";
import willemstad3 from "./willemstad3.png";
import willemstad4 from "./willemstad4.png";
import willemstad5 from "./willemstad5.jpg";

export const assets = {
  willemstad1,
  willemstad2,
  willemstad3,
  willemstad4,
  willemstad5,
  school1,
  school2,
  school4,
  louise1,
  louise2,
  lisanne1,
  lisanne2,
  lisanne3,
  lisanne4,
  lisanne5,
  lisanne6,
  cafeina3,
  cafeina1,
  cafeina2,
  cycle10,
  cycle9,
  cycle8,
  cycle7,
  cycle6,
  cycle5,
  cycle3,
  cycle2,
  cycle1,
  boek1,
  boek2,
  Vela1,
  Vela2,
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
    url: "./#about",
  },
  {
    title: "Services",
    url: "./#services",
  },
  {
    title: "Works",
    url: "./#works",
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

    image: assets.cafeina3,
    title: "Poster Design",
    Link: "/",
  },
];

//add minidesc for porfolio page and longdesc for dynamic page

export const portfolioData = [
  {
    id: "bar-vela",
    title: "Bar Vela - Business Card",
    images: [assets.vela_main, assets.Vela1, assets.Vela2],
    shortDesc:
      "Bar Vela’s business card mirrors its stylish Antwerp interior, combining minimalism with modern elegance.",
    longDesc:
      "Located in Antwerp, Bar Vela blends sophistication with a modern edge. Its business card reflects this identity through a sleek, minimalistic design inspired by the bar’s ambiance and logo. With clean lines and a refined aesthetic, the card embodies the essence of Bar Vela—chic, contemporary, and effortlessly elegant.",
  },
  {
    id: "Immersive-book",
    title: "Immersive-book",
    images: [assets.boek_main, assets.boek1, assets.boek2],
    shortDesc:
      "I designed a book for Van Immerseel’s ocean-themed artworks, honoring her late husband's passion. Donated to the KinderKankerFonds, it holds personal significance due to its connection to cancer.",
    longDesc:
      "For Van Immerseel, I had the honor of designing a book to showcase her ocean-themed artworks, created as a tribute to her late husband’s passion for fishing and snorkeling. Van’s final project was to donate the book to the KinderKankerFonds.The design aimed to beautifully highlight her intricate works of sea creatures, while conveying the emotional depth behind each piece. Using Adobe Illustrator, InDesign, and Photoshop, I crafted a visually compelling layout that respects the artistry and sentiment behind the project. This project holds a special place in my heart, not only for the opportunity to work on such a meaningful cause but also for the personal connection to the fight against cancer.",
  },
  {
    id: "cycle-studio",
    title: "Cycle-Studio",
    images: [
      assets.cycle_main,
      assets.cycle1,
      assets.cycle2,
      assets.cycle3,
      assets.cycle5,
      assets.cycle6,
      assets.cycle7,
      assets.cycle8,
      assets.cycle9,
      assets.cycle10,
    ],
    shortDesc:
      "Cycle Studio's logo blends minimalism and bold design, inspired by cycling and the studio’s interior.",
    longDesc:
      "The Cycle Studio logo captures the energy of cycling with a modern, minimalistic design. Its bold and dynamic look reflects the studio’s identity while maintaining a clean and professional aesthetic.",
  },
  {
    id: "cafetina",
    title: "Cafeina",
    images: [assets.cafeina3, assets.cafeina1, assets.cafeina2],

    shortDesc:
      "I created event visuals for DJ group Cafeïna, ensuring a cohesive identity across platforms.",
    longDesc:
      "For the DJ group Cafeïna, I created a series of event designs for their Valentine’s special and the birthday celebration of Roma & Zaki. My work included posters, web banners, and animated videos, ensuring a cohesive visual identity across social media and their website.",
  },
  {
    id: "Lisanne",
    title: "Lisanne",
    images: [
      assets.lisanne1,
      assets.lisanne2,
      assets.lisanne3,
      assets.lisanne4,
      assets.lisanne5,
      assets.lisanne6,
    ],
    shortDesc:
      "For Lisanne, I crafted the branding and logos while collaborating with Valentine Emma, who built the website.",
    longDesc:
      "I collaborated with Valentine Emma to create Lisanne’s brand identity. While she developed the website, I designed the logos and branding, ensuring a cohesive and visually strong presence.",
  },
  {
    id: "Louise",
    title: "Louise",
    images: [assets.louise2, assets.louise1],
    shortDesc:
      "I designed the winter menu for Louise-Antwerp, blending elegance and readability to showcase seasonal dishes and drinks.",
    longDesc:
      "For Louise-Antwerp, I created the winter menu, highlighting seasonal dishes and drinks. The design maintains a balance between elegance and functionality, aligning with the brand’s refined identity.",
  },
  {
    id: "School-projects",
    title: "School Projects",
    images: [assets.school2, assets.school1, assets.school4],
    shortDesc:
      "A collection of school assignments showcasing my versatility, including an ice cream campaign, a 3D Christmas card, and a reimagined Argenta logo.",
    longDesc:
      "This collection features diverse school projects: a campaign for lemon-arugula ice cream, a 3D Christmas card in Cinema 4D, and a modernized logo for Argenta bank. Each project reflects my adaptability and creative approach to design.",
  },
  {
    id: "vvk-willemstad",
    title: "VVK Willemstad",
    images: [
      assets.willemstad5,
      assets.willemstad2,
      assets.willemstad3,
      assets.willemstad4,
      assets.willemstad1,
    ],
    shortDesc:
      "I designed Instagram templates for VVK Willemstad, including match announcements, player highlights, and team selection graphics.",
    longDesc:
      "For VVK Willemstad, I created Instagram templates for match days, player highlights, and team selections, ensuring a cohesive and professional social media presence.",
  },
];
