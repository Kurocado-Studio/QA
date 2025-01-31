import { render } from '@testing-library/react';
import { get } from 'lodash-es';
import type React from 'react';
import { axe } from 'vitest-axe';

type ComponentWrapper = React.ComponentType<{ children: React.ReactNode }>;

export const renderComponent = (
  Component: React.ReactElement,
  wrapper?: ComponentWrapper,
): ReturnType<typeof render> => {
  return render(Component, { wrapper });
};

export const auditComponentA11y = async (
  Component: React.ReactElement,
  wrapper?: ComponentWrapper,
): Promise<ReturnType<typeof axe>> => {
  const container = get(renderComponent(Component, wrapper), ['container'], '');
  return axe(container);
};
