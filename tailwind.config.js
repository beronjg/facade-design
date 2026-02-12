/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // The Dark Base
        void: '#0B0E14',
        panel: '#151B25',
        surface: '#1E2633',
        
        // The Accents
        neon: '#22D3EE',    // Cyan for "Tech/Glass"
        concrete: '#94A3B8', // Grey for structure
        hazard: '#F59E0B',   // Orange for highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        // A subtle grid pattern for the background (optional)
        'tech-grid': "linear-gradient(to right, #1E2633 1px, transparent 1px), linear-gradient(to bottom, #1E2633 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}