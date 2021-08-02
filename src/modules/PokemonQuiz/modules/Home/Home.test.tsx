import React from 'react';
import { render } from '@testing-library/react-native';

import { Home } from './Home';

const setup = (props = {}) => {
  return render(<Home {...props} />);
};

describe('Home', () => {
  it('renders', () => {
    const { getByTestId } = setup();

    expect(getByTestId('')).toBeTruthy();
  });
});
