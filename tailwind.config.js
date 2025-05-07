/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D308D", // Azul profundo
        secondary: "#D98B38", // Naranja
        tertiary: "#9CCA46", // Verde vibrante
        background: "#FFFFFF", // Blanco
        text: "#1a1a1a", // Gris oscuro
        textMuted: "#4F4F4F", // Gris claro

        info: {
          blue: "#6699CC", // Azul claro
          orange: "#E6B465", // Dorado claro
          green: "#D1E7DD", // Verde claro
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Para el cuerpo
        heading: ["Montserrat", "sans-serif"], // Para títulos
        serif: ["Playfair Display", "serif"], // Para subtítulos o frases destacadas
      },
    },
  },
  plugins: [],
};
