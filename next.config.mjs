const appMode = process.env.APP_MODE;
const outputMode = process.env.NEXT_OUTPUT;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './src/tsconfig-next.json',
  },
  env: {
    APP_MODE: appMode,
    API_URL: process.env.API_URL || process.env.API_URL_IN_CLIENT,
  },
  ...(outputMode === 'dist' ? {
    output: 'export',
    distDir: 'dist/out',
    trailingSlash: true,
  } : {}),
  ...(outputMode === 'renderer' ? {
    output: 'export',
    distDir: '.renderer',
  } : {}),
  pageExtensions: [
    ...(appMode === 'mock' ? ['mock.tsx', 'mock.ts'] : []),
    'tsx', 'ts',
  ],
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
