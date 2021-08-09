import { render } from '@testing-library/react';

import { Result } from './Result';

describe('Result', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Result data-testid="result" />
    );

    expect(getByTestId('result')).toBeTruthy();
  });
});
