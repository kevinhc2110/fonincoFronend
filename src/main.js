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

// Menú móvil
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Función para alternar submenús
window.toggleSubmenu = function (submenuId) {
  const submenu = document.getElementById(submenuId);
  const allSubmenus = document.querySelectorAll('[id$="-submenu"]');

  // Cerrar otros submenús
  allSubmenus.forEach((menu) => {
    if (menu.id !== submenuId && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  });

  // Alternar el submenú actual
  submenu.classList.toggle("hidden");
};

// Cerrar el menú móvil al hacer clic en un enlace
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "auto";
  });
});

// Swiper configuration
const images = [
  "./src/assets/Convenios/alkomprar.png",
  "./src/assets/Convenios/alkosto.jpg",
  "./src/assets/Convenios/americanVisas.jpg",
  "./src/assets/Convenios/colanta.jpg",
  "./src/assets/Convenios/HDI.jpg",
  "./src/assets/Convenios/optisocial.jpg",
  "./src/assets/Convenios/redvital.jpg",
  "./src/assets/Convenios/redvitalMascotas.jpg",
  "./src/assets/Convenios/royalFilmsLogo.jpg",
  "./src/assets/Convenios/zenu.jpg",
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
