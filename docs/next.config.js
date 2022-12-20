const withSvgr = require("next-svgr");

/** @type {import("next").NextConfig} */
module.exports = withSvgr({
  reactStrictMode: true,
  basePath: "/docs",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "raw-loader",
          options: {},
        },
      ],
    });

    return config;
  },
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
});
