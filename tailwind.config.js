/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      dl: '1536px', //double xl
      hu: '1920px', //huge
      gi: '2560px', //gigantic
    },
    extend: {
      fontFamily: {
        main: ['var(--font-sen)'],
        headers: ['var(--font-vt)'],
      },
      keyframes: {
        clickLink: {
          '0%,100%': {
            opacity: 1,
          },
          '50%': { opacity: 0.2 },
        },
        clickButtonLink: {
          '0%,100%': {
            opacity: 1,
          },
          '50%': { opacity: 0.5 },
        },
      },

      animation: {
        'ping-slow': 'ping 5s linear infinite',
        clickLink: 'clickLink 5s linear infinite',
        clickButtonLink: 'clickButtonLink 5s linear infinite',
      },
      backgroundImage: {
        'header-bgi': "url('')",
        'journey-bgi': "url('')",
        'forex-bgi': "url('')",
        'web-bgi': "url('')",
      },
    },
    colors: {
      main: {
        l5: '#FFF4E6',
        l4: '#FFE8CC',
        l3: '#FFD199',
        l2: '#FFBA66',
        l1: '#FFA333',
        DEFAULT: '#FF8C00',
        d1: '#CC7000',
        d2: '#995400',
        d3: '#663800',
        d4: '#331C00',
        d5: '#190E00',
      },
      neutral: {
        l5: '#F6F7F7',
        l4: '#EDEFF0',
        l3: '#E9EBEC',
        l2: '#E4E7E8',
        l1: '#DBDFE1',
        DEFAULT: '#D2D7D9',
        d1: '#A8ACAE',
        d2: '#7E8182',
        d3: '#545657',
        d4: '#2A2B2B',
        d5: '#151516',
      },
      complementary: {
        l5: '#E7F6FF',
        l4: '#CFEDFF',
        l3: '#9FDBFF',
        l2: '#6EC9FF',
        l1: '#3EB7FF',
        DEFAULT: '#0EA5FF',
        d1: '#0B84CC',
        d2: '#086399',
        d3: '#064266',
        d4: '#032133',
        d5: '#011019',
      },
      shadows: {
        dark: '#331C00',
        light: '#E7F6FF',
        golden: '#FFBA66',
      },
    },
  },
  plugins: [],
};
