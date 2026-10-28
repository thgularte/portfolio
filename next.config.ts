import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [new URL("https://ghchart.rshah.org/**")],
  },
  async redirects() {
    return [
      { source: "/experiences", destination: "/experiencias", permanent: true },
      { source: "/projects", destination: "/projetos", permanent: true },
      { source: "/about", destination: "/sobre-mim", permanent: true },
      { source: "/contact", destination: "/contato", permanent: true },
    ];
  },
};
export default nextConfig;
