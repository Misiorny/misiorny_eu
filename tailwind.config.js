/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme  : {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      dl: "1536px", //double xl
      hu: "1920px", //huge
      gi: "2560px" //gigantic
    },
    extend : {
      fontFamily: {
        main   : ["var(--font-sen)"],
        headers: ["var(--font-vt)"]
      },
      keyframes : {
        clickLink      : {
          "0%,100%": {
            opacity: 1
          },
          "50%"    : { opacity: 0.2 }
        },
        clickButtonLink: {
          "0%,100%": {
            opacity: 1
          },
          "50%"    : { opacity: 0.5 }
        }
      },

      animation      : {
        "ping-slow"    : "ping 5s linear infinite",
        clickLink      : "clickLink 5s linear infinite",
        clickButtonLink: "clickButtonLink 5s linear infinite"
      },
      backgroundImage: {
        "header-bgi" : "url('')",
        "journey-bgi": "url('')",
        "forex-bgi"  : "url('')",
        "web-bgi"    : "url('')"
      }
    },
    colors : {
      custom: {
        bg           : "#F5F1EB",
        sectionbg    : "#E3E1DD",
        primary      : "#6E4B3A",
        primarypale  : "#D5C0A6",
        secondary    : "#4A7C52",
        secondarypale: "#A7D08B",
        accent       : "#D76E27",
        accentpale   : "#F1A16D",
        text         : "#33302E",
        textadd      : "#66625E",
        separators   : "#D1C7BC"
      },

      shadows: {
        dark  : "#331C00",
        light : "#E7F6FF",
        golden: "#FFBA66"
      }
    }
  },
  plugins: []
};
