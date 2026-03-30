import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#111111',
          card: '#161616',
          elevated: '#1C1C1C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          muted: '#666666',
        },
        accent: {
          green: '#7BFF6A',
          'green-dim': '#4ACC3A',
        },
        border: {
          DEFAULT: '#222222',
          subtle: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-editorial)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-fragment-mono)', 'var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(123, 255, 106, 0.15)',
        panel: '0 24px 64px rgba(0, 0, 0, 0.28)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
