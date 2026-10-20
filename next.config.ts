import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Sources in public/images are already right-sized WebP. One output format and a
    // short list of widths keep Vercel's optimised-image cache (and usage) small.
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1080, 1440, 1920],
    imageSizes: [128, 256, 384],
    qualities: [75],
    minimumCacheTTL: 2678400, // 31 days; image files never change in place
  },
};

export default nextConfig;
