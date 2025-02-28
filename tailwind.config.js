/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#ff5733",
        secondary: "#3498db",
        weirdblue: "#344e87",
        afterhover: "#6181c6",
        sidebar: "#EBEBEB",
        pink: "#f5eef9",
        textColor: "#7D7D7D",
        activeText: "#9D8AAE",
      },
      width: {
        "80p": "80%",
        "90p": "90%",
        "60p": "60%",
        "50p": "50%",
        "40p": "40%",
      },
    },
  },
  plugins: [],
};
