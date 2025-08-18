/** @type {import('next').NextConfig} */
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: base,          // e.g. "/Azka-AI-Developer"
  assetPrefix: base + "/", // ensures CSS/JS/images work on Pages
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
