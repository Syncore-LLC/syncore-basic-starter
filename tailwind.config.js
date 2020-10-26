module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["*.html"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        xxl: "1600px",
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {},
  plugins: [],
}
