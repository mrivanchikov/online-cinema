/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      content:{
        'check':'url(/src/assets/check.svg)',
        'cross':'url(/src/assets/cross.svg)'
      },
      colors:{
        gr1: '#f2f2f3',
        or1: '#e48f13',
        bl1: '#212529',
        drkbg:'#1c1c1e',
        btndbg:'#36373d',
        drkhwr:'#2f2f2f',
        drkfill:'#141414',
        pupdbg:'#252527',
        scrldrkbg:'#282828',
        chbrdr:'#e5e7eb',
      }
    },
  },
  plugins: [],
}

