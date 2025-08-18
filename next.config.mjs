/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",               // static export for GitHub Pages
  images: { unoptimized: true },  // needed on static hosting
  basePath: "",                   // user site: no base path
  assetPrefix: "",                // user site: no prefix
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
