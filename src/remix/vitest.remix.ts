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
      include: [`test/**/*.test.{ts,tsx}`],
    },
    css: true,
    tsconfig: './tsconfig.json',
    environment: 'jsdom',
    setupFiles: ['./setup.remix.ts'],
  },
};
