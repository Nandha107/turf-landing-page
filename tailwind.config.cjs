module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      backdropBlur: ["hover", "focus"],
    },
  },
  theme: {
    extend: {
      spacing: {
        "cursor-size": "40px",
        "cursor-hover-size": "80px",
      },
      colors: {
        "cursor-base": "rgba(53, 54, 57, 0.1)",
        "cursor-hover": "rgba(255, 165, 0, 0.5)",
        primary: {
          DEFAULT: "var(--color-primary)",
          border: "var(--color-primary-border)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          border: "var(--color-secondary-border)",
          foreground: "var(--secondary-foreground)",
        },
        background: "var(--color-primary)",
        // background: 'hsl(var(--color-primary))',
        foreground: "var(--color-primary)",
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // chart: {
        //   1: "hsl(var(--chart-1))",
        //   2: "hsl(var(--chart-2))",
        //   3: "hsl(var(--chart-3))",
        //   4: "hsl(var(--chart-4))",
        //   5: "hsl(var(--chart-5))",
        // },
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.75, -1, 0.3, 2.33)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      //   borderRadius: {
      //     lg: "var(--radius)",
      //     md: "calc(var(--radius) - 2px)",
      //     sm: "calc(var(--radius) - 4px)",
      //   },
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        singleSlide: "singleSlide 1.5s ease forwards", // Adjust timing as needed
        // doubleSlide: "doubleSlide 1.5s ease forwards",
        parallaxText: "parallaxText 1.5s ease 0.75s forwards", // Delay to sync with the second slide
        slideOut: "slideOut 1s ease-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        zoomIn: 'zoomIn 0.5s ease-in-out forwards',
        slideReveal: "slideReveal 1s ease-in forwards",
        revealText: "revealText 1.1s ease-out forwards",
      },
      blur: {
        "10px": "10px",
      },
      keyframes: {
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        singleSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }, // Only move from left to right once
        },
        parallaxText: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(30px)" }, // Slow parallax-like movement
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideReveal: {
          "0%": { transform: "translateX(-90%)" }, // Start at the left
          "60%": { transform: "translateX(0%)" }, // Slide fully across the text
          "100%": { transform: "translateX(200%)" }, // Completely move out of view
        },
        revealText: {
          "0%": { opacity: 0, transform: "scale(0.95)" }, // Text starts hidden and slightly smaller
          "60%": { opacity: 0, transform: "scale(0.95)" }, // Remains hidden while box slides
          "100%": { opacity: 1, transform: "scale(1)" }, // Text becomes fully visible and scales up slightly
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
