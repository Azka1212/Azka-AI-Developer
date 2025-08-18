/** @type {import('next').NextConfig} */
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",                // static export
  images: { unoptimized: true },   // required on static hosting
  basePath: base,                  // e.g. "/azka-portfolio-website"
  assetPrefix: base + "/",         // ensures CSS/JS/images get correct prefix
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
