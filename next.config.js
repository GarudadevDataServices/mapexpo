const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: './',
// };

// module.exports =  nextConfig;
module.exports = {
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  // assetPrefix: './'
}

// module.exports = {
//   reactStrictMode: true,
//   output: "export",

//   trailingSlash: SITE.trailingSlash,
//   basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

//   swcMinify: true,
//   poweredByHeader: false,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'source.unsplash.com',
//       },
//     ],
//   }
// };
