const config = {
  content: [
    // ... seus caminhos de content existentes
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ADICIONE ISTO AQUI:
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
