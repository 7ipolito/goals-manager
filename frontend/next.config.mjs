/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/goals',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
