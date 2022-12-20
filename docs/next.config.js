/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: "/docs",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        basePath: false,
        permanent: false,
      },
    ];
  },
};
