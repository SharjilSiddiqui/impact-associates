/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // All React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#046CA9",
        white: "#FFFFFF",
        black: "#000000",
        // Brand colors using the specified palette
        brand: {
          50: "#E6F3FA",
          100: "#CCE7F5",
          200: "#99CEEB",
          300: "#66B6E1",
          400: "#339DD7",
          500: "#046CA9",
          600: "#035A8A",
          700: "#02476B",
          800: "#02354C",
          900: "#01232D",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        }
      },
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        // Enhanced typography
        display: ["Playfair Display", "serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        "nav-height": "4rem",
        "section-padding": "6rem",
        "container-padding": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 14px rgba(4, 108, 169, 0.1)",
        'card-hover': "0 20px 40px rgba(4, 108, 169, 0.15)",
        'glow': "0 0 20px rgba(4, 108, 169, 0.3)",
        'glow-lg': "0 0 40px rgba(4, 108, 169, 0.4)",
        'inner-glow': "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #046CA9 0%, #035A8A 50%, #02476B 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
