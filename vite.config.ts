import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel:           {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
    tsconfigPaths(),
  ],
  server:  {
    port: 3000,
    open: true,
  },
  build:   {
    outDir:    'build',
    sourcemap: true,
  },
  test:    {
    globals:     true,
    environment: 'jsdom',
    setupFiles:  './src/test/setup.ts',
  },
});
