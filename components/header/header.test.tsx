import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header tests', () => {
  it('should render all page title and all navigation options', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();

    const menuOptions = ['Sort', 'Search'];
    menuOptions.forEach((option) => {
      expect(screen.getByRole('heading', { name: option })).toBeDefined();
    });
  });
});
