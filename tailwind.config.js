/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: 
  {
    extend: 
    {
      backgroundImage:
      {
        'hero': "url('../assets/images/hero.jpg')",
      },
      screens: 
      {
        'xs': '320',
      },
      fontFamily:
      {
        FFspaceGrotesk:[ "Space Grotesk"," sans-serif"]
      },
    }
  },
  plugins: [],
}
