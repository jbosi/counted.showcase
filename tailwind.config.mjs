import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'gh-bg': '#f6f8fa',
        'gh-canvas': '#ffffff',
        'gh-border': '#d0d7de',
        'gh-accent': '#0969da',
        'gh-accent-emphasis': '#0550ae',
        'gh-success': '#1f883d',
        'gh-attention': '#9a6700',
        'gh-danger': '#cf222e',
        'gh-neutral': '#24292f',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'monospace'
        ]
      }
    }
  },
  daisyui: {
    themes: [
      {
        github: {
          primary: '#0969da',
          'primary-content': '#ffffff',
          secondary: '#57606a',
          accent: '#1f883d',
          neutral: '#24292f',
          'base-100': '#ffffff',
          'base-200': '#f6f8fa',
          'base-300': '#d0d7de',
          info: '#0969da',
          success: '#1f883d',
          warning: '#9a6700',
          error: '#cf222e'
        }
      },
      'light',
      'dark'
    ]
  },
  plugins: [daisyui]
};

export default config;
