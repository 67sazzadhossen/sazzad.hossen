/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows all domains
        pathname: "/**", // This allows any path in the domain
      },
    ],
  },
};

export default nextConfig;
