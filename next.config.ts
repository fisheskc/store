import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // pageExtensions: [
  //       "page.tsx",
  //       "page.ts",
  //       // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
  //       // Instead, use `not-found.ts` as a workaround
  //       // "ts" is required to resolve `not-found.ts`
  //       // https://github.com/vercel/next.js/issues/65447
  //       "ts"
  //   ],
    images: {
      remotePatterns:[
        {
        protocol:'https', 
        hostname: "images.pexels.com"
      },
      {
        protocol: 'https',
        hostname: 'aubvbrlscmmlygjlapzn.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
}

export default nextConfig;
