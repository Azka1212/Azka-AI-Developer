Set-Content -Encoding UTF8 -Path .\next.config.mjs -Value @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "",
  assetPrefix: "",
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
"@
