import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        ammeb: {
          primary: 'black',
          secondary: 'orange',
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
