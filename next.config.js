module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // headers: async () => [
  //   {
  //     source: '/:path*',
  //     headers: [
  //       {
  //         key: 'Cache-Control',
  //         value: 'public, max-age=31536000, immutable'
  //       }
  //     ]
  //   },
  //   {
  //     source: '/_next/static/:path*',
  //     headers: [
  //       { 
  //         key: 'Cache-Control',
  //         value: 'public, max-age=31536000, immutable'
  //       }
  //     ]
  //   }
  // ]
};
