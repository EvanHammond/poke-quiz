import React from 'react';
import { render } from '@testing-library/react';

import { SiteHeader } from './SiteHeader';

describe('SiteHeader', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <SiteHeader data-testid="siteHeader" />
    );

    expect(getByTestId('siteHeader')).toBeTruthy();
  });
});
