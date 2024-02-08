/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  rewrites: [
    {
      source: "/__/auth/:path*",
      destination: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/__/auth/:path*`,  
    },
  ],
};

export default nextConfig;
