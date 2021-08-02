import React from 'react';
import { render } from '@testing-library/react-native';

import { SiteHeader } from './SiteHeader';

const setup = (props = {}) => {
  return render(<SiteHeader {...props} />);
};

describe('SiteHeader', () => {
  it('renders', () => {
    const { getByTestId } = setup();

    expect(getByTestId('')).toBeTruthy();
  });
});
