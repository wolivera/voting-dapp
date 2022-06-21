module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        210: "210ms",
        220: "220ms",
        230: "230ms",
        240: "240ms",
        250: "250ms",
        260: "260ms",
        270: "270ms",
        280: "280ms",
        290: "290ms",
      },
      colors: {
        primary: {
          DEFAULT: "#34C9FA",
          dark: "#8C7AE6",
        },
        secondary: { DEFAULT: "#0185e4", dark: "#254379" },
        green: {
          DEFAULT: "#1CC4AB",
          dark: "#17a892",
        },
        orange: "#FF8C4D",
        pink: {
          100: "#FBF5F5",
          200: "#F8EEED",
          300: "#FFD8D9",
          transparent: "#f8eeedcc",
        },
        yellow: {
          dark: "#e98e00",
          DEFAULT: "#ff9c04",
          light: "#fbda69",
          modal: "#feb025",
        },
        blue: {
          100: "#A7BDE6",
          200: "#63ACFB",
          gray: "#cdd5e1",
          DEFAULT: "#1a3971",
          light: "#2296f3",
          dark: "#11274d",
        },
      },
      fontSize: {
        small: ["18px", "1"],
        titleMd: ["24px", "1"],
        titleLg: ["42px", "1"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {
        vh50: "50vh",
        vh45: "45vh",
        vh40: "40vh",
        vh30: "30vh",
      },
      spacing: {
        vh5: "5vh",
        vh6: "6vh",
        vh10: "10vh",
        vh15: "15vh",
        vh20: "20vh",
        vh30: "30vh",
        "1/6": "16.666667%",
      },
      minWidth: {
        head1: "115px",
        head2: "60px",
        sidebar: "160px",
      },
      zIndex: {
        60: 60,
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["first", "last"],
      textColor: ["first"],
      borderColor: ["checked"],
      width: ["responsive", "hover", "focus"],
      display: ["hover", "focus", "group-hover"],
      margin: ["first", "last"],
      fontWeight: ["responsive", "hover", "focus"],
      scale: ["hover", "focus", "group-hover"],
      opacity: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
