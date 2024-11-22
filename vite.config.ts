import { vitePlugin as remix } from "@remix-run/dev";
import { } from "@remix-run/node"; // NOTE: declare moduleの拡張モジュール名が無効判定を受けないための処置
import { flatRoutes } from "remix-flat-routes";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const appDir = "src";
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  plugins: [
    remix({
      appDirectory: appDir,
      ignoredRouteFiles: ["**/*"],
      routes: async (defineRoutes) => flatRoutes("routes", defineRoutes, { appDir }),
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      buildDirectory: "./.webapp",
    }),
    tsconfigPaths({
      projects: [
        "./src/tsconfig-remix.json",
      ],
    }),
  ],
});
