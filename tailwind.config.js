/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#343C6A",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#718ebf",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ff4b4a",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#41d4a8",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f7fa",
          foreground: "#718ebf",
        },
        accent: {
          DEFAULT: "#e6eff5",
          foreground: "#343c6a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#343c6a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
