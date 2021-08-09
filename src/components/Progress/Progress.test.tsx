import { render } from '@testing-library/react';

import { Progress } from './Progress';

describe('Progress', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Progress data-testid="progress" />
    );

    expect(getByTestId('progress')).toBeTruthy();
  });
});
