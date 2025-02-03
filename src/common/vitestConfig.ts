import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { ViteUserConfig } from 'vitest/config';

export interface VitestConfig extends ViteUserConfig {}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const vitestConfig: VitestConfig = {
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    environment: 'node',
    globals: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './app'),
    },
  },
};
