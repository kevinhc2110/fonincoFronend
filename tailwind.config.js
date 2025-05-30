/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f2fc",
          100: "#dcdcfa",
          200: "#b6b8f3",
          300: "#8e91eb",
          400: "#696de3",
          500: "#4f53cc",
          600: "#3f43aa",
          700: "#2d308d", // Color base
          800: "#23276b",
          900: "#191c4d",
        }, // Azul
        secondary: {
          50: "#fff8f1",
          100: "#feeeda",
          200: "#fdd4aa",
          300: "#fbb974",
          400: "#f9a348",
          500: "#f38a25",
          600: "#d98b38", // Color base
          700: "#b66c20",
          800: "#925318",
          900: "#713f13",
        }, // Naranja
        tertiary: {
          50: "#f4fce5",
          100: "#e3f9c2",
          200: "#cdf29c",
          300: "#b1e66d",
          400: "#9cca46", // Color base
          500: "#84b636",
          600: "#6b9f29",
          700: "#52851e",
          800: "#3a6a15",
          900: "#2b520f",
        }, // Verde
        background: "#FFFFFF", // Blanco
        text: "#1a1a1a", // Gris oscuro
        textMuted: "#4F4F4F", // Gris claro
        textMore: "#7D7D7D", // Gris mas claro

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
