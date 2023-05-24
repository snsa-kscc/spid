module.exports = {
  i18n: {
    localeDetection: false,
    locales: ["hr", "en"],
    defaultLocale: "hr",
  },
  async redirects() {
    return [
      {
        source: "/article/:slug*",
        destination: "/novosti/:slug*",
        permanent: true,
      },
    ];
  },
};
