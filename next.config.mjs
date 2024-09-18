/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "/apply-management",
      permanent: true,
    },
  ],
};

export default nextConfig;
