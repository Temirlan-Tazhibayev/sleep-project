/** @type {import('next').NextConfig} */
const { i18n } = require("./next-18next.config");

const nextConfig = {
   /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
    //  output: "export",

   /**
    * Set base path. This is the slug of your GitHub repository.
    *
    * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
    */
     // basePath: "/nextjs-github-pages",
 
   /**
    * Disable server-based image optimization. Next.js does not support
    * dynamic features with static exports.
    *
    * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
    */
  i18n,
  reactStrictMode: true,
  transpilePackages: ['@mui/x-charts'],
  output: "export",
  
};

module.exports = nextConfig;
