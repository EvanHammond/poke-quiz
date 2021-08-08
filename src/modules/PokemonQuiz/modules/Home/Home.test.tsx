import React from 'react';
import { render } from '@testing-library/react';

import { Home } from './Home';

describe('Home', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Home data-testid="home" />
    );

    expect(getByTestId('home')).toBeTruthy();
  });
});
