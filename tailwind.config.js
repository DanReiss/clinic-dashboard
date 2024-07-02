/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        p_orange: '#D37045',
        p_ligherblue: '#D3DFE8',
        p_lightblue: '#45CAD3',
        p_darkblue: '#38509F',
        p_green: '#46D175',
        p_red: '#F23E3E',
        p_white: '#EBF4F4',
        p_gray: '#535251',
        p_graysecondary: '#645E5B',
        p_black: '#171717',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'system-ui', 'ui-monospace'],
      },
    },
  },
  plugins: [],
};
