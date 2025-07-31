const nextConfig = {
  output: 'export',
  basePath: "/parkjaehwan",
  assetPrefix: "/parkjaehwan",
  images: {
    unoptimized: true,
    path: "/parkjaehwan",
    loader:"custom",
    loaderFile: "./src/app/util/imageLoader.ts"
  },
}
 
module.exports = nextConfig