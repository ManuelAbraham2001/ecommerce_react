module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'sp': {'max': '480px'}
    },
    extend: {
      colors:{
        'color1': '#2563eb'
      }
    },
  },
  plugins: [require("daisyui")],
}
