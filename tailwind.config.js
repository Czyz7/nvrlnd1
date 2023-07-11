/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {        
            primary: "#38bdf8",                    
            secondary: "#a78bfa",                    
            accent: "#374151",                    
            neutral: "#374151",                   
            "base-100": "#9d174d",                    
            info: "#a5b4fc",                    
            success: "#6ee7b7",                    
            warning: "#fde047",                    
            error: "#f87171",
            body: {
              "background-color": "#701a75",
            }
        },
      },
    ],
  },
}
