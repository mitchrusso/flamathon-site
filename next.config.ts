import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Origin-Agent-Cluster", value: "?1" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
