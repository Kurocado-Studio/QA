import { json } from '@remix-run/node';
import { createRemixStub } from '@remix-run/testing';
import { render } from '@testing-library/react';
import React from 'react';
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
  const { container } = renderComponent(Component, wrapper);
  return axe(container);
};

export const renderWithRemix = (
  Component: React.FC,
  loaderData?: any,
): ReturnType<typeof render> => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component,
      loader() {
        return json(loaderData || {});
      },
    },
  ]);

  return render(<RemixStub />);
};
