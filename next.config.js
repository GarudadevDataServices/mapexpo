const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  }
  
module.exports = nextConfig
// module.exports = {
//   reactStrictMode: true,

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
