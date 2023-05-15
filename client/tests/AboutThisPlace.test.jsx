import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import AboutThisPlace from './src/components/AboutThisPlace/AboutThisPlace.jsx';

describe('AboutThisPlace', () => {
  it('renders AboutThisPlace component', () => {
    render(<AboutThisPlace />);

    screen.debug();

    // check if App components renders headline
  });
});