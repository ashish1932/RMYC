/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rmyc: {
          navy: '#051923',
          'ocean-dark': '#0a2540',
          'ocean-deep': '#0d3d4d',
          'ocean-mid': '#165a6a',
          'ocean-teal': '#1a5a6e',
          'sea-foam': '#f0f7f9',
          'sand-light': '#faf6f0',
          gold: '#d4a55a',
          'gold-light': '#e8b86d',
          'gold-dark': '#b5883d',
          brass: '#c59b27',
          charcoal: '#1c2833',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(5, 25, 35, 0.4) 0%, rgba(13, 61, 77, 0.75) 60%, rgba(5, 25, 35, 0.95) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #e8b86d 0%, #d4a55a 50%, #b5883d 100%)',
        'gold-border': 'linear-gradient(90deg, rgba(212,165,90,0.1), rgba(212,165,90,0.6), rgba(212,165,90,0.1))',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(26, 90, 110, 0.25) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(212, 165, 90, 0.15) 0px, transparent 50%)',
      },
      animation: {
        'wave-pulse': 'wavePulse 8s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        wavePulse: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
