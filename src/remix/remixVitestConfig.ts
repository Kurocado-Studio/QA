import { vitePlugin as remix } from '@remix-run/dev';
import react from '@vitejs/plugin-react';
import { get } from 'lodash-es';

import { type VitestConfig, vitestConfig } from '../common/vitestConfig';

export interface RemixVitestConfig extends VitestConfig {}

export const remixVitestConfig: RemixVitestConfig = {
  ...vitestConfig,
  plugins: [
    ...get(vitestConfig, ['plugins'], []),
    react(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
        // @ts-ignore -- types not being updated yet
        v7_skipActionErrorRevalidation: true,
      },
    }),
  ],
  test: {
    ...get(vitestConfig, ['test'], {}),
    css: true,
    environment: 'jsdom',
    setupFiles: ['./setup.remix.ts'],
  },
};
