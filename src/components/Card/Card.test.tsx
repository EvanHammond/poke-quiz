import { render } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Card data-testid="card" />
    );

    expect(getByTestId('card')).toBeTruthy();
  });
});
