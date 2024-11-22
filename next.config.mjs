const appMode = process.env.APP_MODE;
const outputMode = process.env.NEXT_OUTPUT;

const tsconfigPath = './src/tsconfig-next.json';

process.env.APP_TYPE = "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath,
  },
  env: {
    APP_MODE: appMode,
    API_URL: process.env.API_URL || process.env.API_URL_IN_CLIENT,
  },
  ...(() => {
    switch (outputMode) {
      case "dist": // NOTE: for static export
        return {
          output: 'export',
          distDir: 'dist/out',
          trailingSlash: true,
        };
      case "renderer": // NOTE: for Electron
        return {
          output: 'export',
          distDir: '.renderer',
        };
      default:
        return {
          distDir: ".webapp",
        }
    }
  })(),
  pageExtensions: [
    ...(appMode === 'mock' ? ['mock.tsx', 'mock.ts'] : []),
    'tsx', 'ts',
  ],
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
