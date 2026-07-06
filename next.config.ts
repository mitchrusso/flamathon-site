import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.torchbearersauces.com",
      },
      {
        protocol: "https",
        hostname: "melindas.com",
      },
      {
        protocol: "https",
        hostname: "mikeshothoney.com",
      },
      {
        protocol: "https",
        hostname: "www.flatironpepper.com",
      },
      {
        protocol: "https",
        hostname: "kosmosq.com",
      },
      {
        protocol: "https",
        hostname: "famousbbq.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
