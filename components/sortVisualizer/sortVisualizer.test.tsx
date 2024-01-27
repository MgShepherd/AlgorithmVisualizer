import { render, screen } from '@testing-library/react';
import SortVisualizer from './sortVisualizer';

describe('Sort Visualizer Tests', () => {
  it('should render all the elements provided', () => {
    const testElements = [30, 20, 50, 40, 10];
    render(<SortVisualizer elements={testElements} />);

    for (let element of testElements) {
      expect(screen.findByText(element)).toBeDefined();
    }
  });
});
