import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite";

const images = [
    'images/alkomprar.png',
    'images/alkosto.jpg',
    'images/americanVisas.jpg',
    'images/colanta.jpg',
    'images/HDI.jpg',
    'images/logo-foninco-transparente.png',
    'images/logoFoninco.jpg',
    'images/optisocial.jpg',
    'images/paypallogo.png',
    'images/redvital.jpg',
    'images/redvitalMascotas.jpg',
    'images/royalFilmsLogo.jpg',
    'images/slack.png',
    'images/spotify.png',
    'images/zenu.jpg'
  ];

  const logos = document.querySelectorAll('.logo');
  let currentIndexes = [0, 1, 2, 3, 4, 5]; // índices iniciales para las 6 imágenes
  let nextReplace = 0; // cuál imagen cambiar en cada paso

  function updateLogo() {
    const img = logos[nextReplace];

    // Animación de salida
    img.classList.add('-translate-y-full', 'opacity-0');

    setTimeout(() => {
      // Calcular el próximo índice de imagen global
      currentIndexes[nextReplace] = (currentIndexes[nextReplace] + 6) % images.length;
      img.src = images[currentIndexes[nextReplace]];

      // Reiniciar posición y mostrar
      img.classList.remove('-translate-y-full');
      img.classList.add('translate-y-full');

      setTimeout(() => {
        img.classList.remove('translate-y-full', 'opacity-0');
      }, 50);
    }, 500);

    // Siguiente logo a reemplazar
    nextReplace = (nextReplace + 1) % 6;
  }

  setInterval(updateLogo, 2500); // cada 2.5s cambia uno