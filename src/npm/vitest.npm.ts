import { get } from 'lodash-es';

import { type VitestConfig, vitestConfig } from '../common/vitestConfig';

export interface VitestNpm extends VitestConfig {}

export const vitestNpm: VitestNpm = {
  ...vitestConfig,
  plugins: get(vitestConfig, ['plugins'], []),
  test: {
    ...get(vitestConfig, ['test'], {}),
    coverage: {
      ...get(vitestConfig, ['test', 'coverage'], {}),
      // @ts-ignore type-mismatch
      include: ['src/**/*.{ts,tsx}'],
    },
    tsconfig: './tsconfig.json',
    environment: 'node',
    setupFiles: ['./setup.npm.ts'],
  },
};
