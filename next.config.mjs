/** @type {import('next').NextConfig} */
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default {
  output: "export",
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base + "/",
  typescript: { ignoreBuildErrors: true },
};
