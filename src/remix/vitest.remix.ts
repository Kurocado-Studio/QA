import { get } from 'lodash-es';

import { type VitestConfig, vitestConfig } from '../common/vitestConfig';

export interface VitestRemix extends VitestConfig {}

export const vitestRemix: VitestRemix = {
  ...vitestConfig,
  plugins: get(vitestConfig, ['plugins'], []),
  test: {
    ...get(vitestConfig, ['test'], {}),
    coverage: {
      ...get(vitestConfig, ['test', 'coverage'], {}),
      // @ts-ignore type-mismatch
      include: [`app/**/*.{ts,tsx}`],
    },
    css: true,
    environment: 'jsdom',
    setupFiles: ['./setup.remix.ts'],
  },
};
