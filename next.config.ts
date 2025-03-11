import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fssz1-1.fna.fbcdn.net",
        port: "",
        pathname:
          "/v/t51.2885-19/**",
      },
    ],
  },
};

export default nextConfig;
