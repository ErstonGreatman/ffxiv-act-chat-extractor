import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';


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
  test:    {
    globals:     true,
    environment: 'jsdom',
    setupFiles:  './src/test/setup.ts',
  },
});
