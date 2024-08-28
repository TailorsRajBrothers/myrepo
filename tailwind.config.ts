import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm':  {'min': '320px', 'max': '1023px'},
      'lg': {'min':'1024px', 'max':'2560px'},
 
    },
    extend: {
      backgroundImage: {
        'Hero' : 'url("/Hero.jpg")',
        'Vibrant': 'url("/Vibrant.jpg")',
        'Winter': 'url("/Winter.jpg")',
        'Legacy': 'url("/Legacy.jpg")',
      },
    },
    
    
    backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain',
          '50%': '50%',
          '16': '4rem',
        }
    ,

    scroll: {
      'y': 'scroll-x',
    },
  },
  plugins: [],
};
export default config;
