import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import flowbitePlugin from 'flowbite/plugin';


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", 'node_modules/flowbite-qwik/**/*.{cjs,mjs}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        alert: {
          DEFAULT: "hsl(var(--alert))",
          foreground: "hsl(var(--alert-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        base: "var(--border-radius)",
        sm: "calc(var(--border-radius) + 0.125rem)",
        DEFAULT: "calc(var(--border-radius) + 0.25rem)",
        md: "calc(var(--border-radius) + 0.375rem)",
        lg: "calc(var(--border-radius) + 0.5rem)",
        xl: "calc(var(--border-radius) + 0.75rem)",
        "2xl": "calc(var(--border-radius) + 1rem)",
        "3xl": "calc(var(--border-radius) + 1.5rem)",
      },
      borderWidth: {
        base: "var(--border-width)",
        DEFAULT: "calc(var(--border-width) + 1px)",
        2: "calc(var(--border-width) + 2px)",
        4: "calc(var(--border-width) + 4px)",
        8: "calc(var(--border-width) + 8px)",
      },
      boxShadow: {
        base: "var(--shadow-base)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        inner: "var(--shadow-inner)",
      },
      strokeWidth: {
        0: "0",
        base: "var(--stroke-width)",
        1: "calc(var(--stroke-width) + 1px)",
        2: "calc(var(--stroke-width) + 2px)",
      },
      animation: {
        "accordion-up": "collapsible-up 0.2s ease-out 0s 1 normal forwards",
        "accordion-down": "collapsible-down 0.2s ease-out 0s 1 normal forwards",
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
      },
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--qwikui-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--qwikui-collapsible-content-height)" },
          to: { height: "0" },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#0077CC", // Neutral blue
          50: "#F2F8FD",       // Very light blue (almost white)
          100: "#E6F0FB",      // Light blue
          200: "#CCE1F7",      // Soft, light blue
          300: "#99C4EF",      // Medium-light blue
          400: "#66A7E7",      // Moderate blue
          500: "#0077CC",      // Neutral blue (Default)
          600: "#005FA3",      // Darker blue
          700: "#00497A",      // Deep blue
          800: "#003451",      // Very deep blue
          900: "#001D33",      // Near-black blue     // Almost black
          
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".press": {
          transform: "var(--transform-press)",
        },
      });
    }),
    typography,
    flowbitePlugin,
  ],
  darkMode: "class",
};
