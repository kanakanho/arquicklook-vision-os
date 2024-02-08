/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  rewrites: [
    {
      source: "/__/auth/:slug*",
      destination: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/__/auth/:slug*`,  
    },
  ],
};

export default nextConfig;
