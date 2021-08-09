import { render } from '@testing-library/react';

import { AppProviders } from './AppProviders';

describe('AppProviders', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <AppProviders data-testid="appProviders" />
    );

    expect(getByTestId('appProviders')).toBeTruthy();
  });
});
