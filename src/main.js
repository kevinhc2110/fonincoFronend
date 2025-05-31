import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/autoplay";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

AOS.init();

const images = [
  "images/alkomprar.png",
  "images/alkosto.jpg",
  "images/americanVisas.jpg",
  "images/colanta.jpg",
  "images/HDI.jpg",
  "images/logo-foninco-transparente.png",
  "images/logoFoninco.jpg",
  "images/optisocial.jpg",
  "images/paypallogo.png",
  "images/redvital.jpg",
  "images/redvitalMascotas.jpg",
  "images/royalFilmsLogo.jpg",
  "images/slack.png",
  "images/spotify.png",
  "images/zenu.jpg",
];

const swiper = new Swiper(".mySwiper", {
  modules: [Autoplay],
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    640: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
  },
});
