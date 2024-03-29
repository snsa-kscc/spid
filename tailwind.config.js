module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
      mono: "IntegralCF, monospace",
    },
    extend: {
      boxShadow: {
        spid: "4px 4px 0px 0px rgba(0,0,0,1)",
      },
      gridTemplateColumns: {
        spid: "repeat(auto-fit, minmax(20rem, 1fr))",
        organization: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  variants: {},
  plugins: [],
};
