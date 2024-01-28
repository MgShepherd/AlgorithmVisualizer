import { render, screen } from '@testing-library/react';
import SortVisualizer from './sortVisualizer';

describe('Sort Visualizer Tests', () => {
  it('should render the correct number of elements', () => {
    const testElements = [30, 20, 50, 40, 10];
    render(<SortVisualizer elements={testElements} />);

    expect(screen.getAllByTestId('sortElement')).toHaveLength(
      testElements.length,
    );
  });
});
