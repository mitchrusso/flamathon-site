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
      {
        protocol: "https",
        hostname: "www.yellowbirdfoods.com",
      },
      {
        protocol: "https",
        hostname: "davesgourmet.com",
      },
      {
        protocol: "https",
        hostname: "elijahsxtreme.com",
      },
      {
        protocol: "https",
        hostname: "bravadospice.com",
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
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
