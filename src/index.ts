export {
  type RemixVitestConfig,
  remixVitestConfig,
} from './remix/remixVitestConfig';

export { renderComponent, auditComponentA11y } from './remix/utils';

export * as browserLibrary from '@testing-library/react';

export type * as BrowserLibrary from '@testing-library/react';

export { type VitestConfig, vitestConfig } from './common/vitestConfig';

export { defineConfig as defineVitestConfig } from 'vitest/config';
