/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
    unoptimized: true, // 👈 disables the Image Optimization API
  },
  output: "export",
  async redirects() {
    return [
      {
        source: '/glc2024',
        destination: '/glc2025', // redirect to this page
        permanent: true, // or false if temporary
      },
    ];
  },
};

export default nextConfig;
