const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: "/parkjaehwan",
    assetPrefix: "/parkjaehwan",
  }),
  images: {
    unoptimized: true,
    ...(process.env.NODE_ENV === 'production' && {
      path: "/parkjaehwan",
    }),
    loader: process.env.NODE_ENV === 'production' ? "custom" : "default",
    ...(process.env.NODE_ENV === 'production' && {
      loaderFile: "./src/app/util/imageLoader.ts"
    })
  },
}
 
module.exports = nextConfig