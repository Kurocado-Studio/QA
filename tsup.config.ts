/* eslint-disable import/no-default-export */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  splitting: false,
  target: 'node20',
  treeshake: true,
  ...options,
}));
