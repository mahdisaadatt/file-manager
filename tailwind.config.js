/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-estedad)', 'sans-serif'],
      serif: ['var(--font-estedad)', 'serif'],
    },
    screens: {
      mobile: '560px',
      tablet: '760px',
      desktop: '960px',
      wide: '1370px',
    },
    extend: {
      gridTemplateColumns: {
        main: 'repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
