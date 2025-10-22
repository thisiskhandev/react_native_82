/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Indigo-600
          light: '#6366F1',
          dark: '#3730A3',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald-500
          light: '#34D399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber-500
          light: '#FBBF24',
          dark: '#B45309',
        },
        background: '#F9FAFB',
        surface: '#FFFFFF',
        muted: '#9CA3AF',
        danger: '#EF4444',
        success: '#22C55E',
        warning: '#EAB308',
      },

      fontFamily: {
        // Gordita family (mapped to your native font names)
        'gordita-black': ['Gordita-Black'],
        'gordita-bold': ['Gordita-Bold'],
        'gordita-medium': ['Gordita-Medium'],
        'gordita-regular': ['Gordita-Regular'],
        'gordita-light': ['Gordita-Light'],

        // Poppins family
        'poppins-bold': ['Poppins-Bold'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-regular': ['Poppins-Regular'],
      },

      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
      },

      borderRadius: {
        none: 0,
        sm: 4,
        DEFAULT: 8,
        lg: 12,
        xl: 16,
        full: 9999,
      },
    },
  },
  plugins: [],
};
