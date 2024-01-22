import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './header';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const mockUsePathname = jest.fn();
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('Header tests', () => {
  const menuOptions = ['Sort', 'Search'];

  beforeEach(() => {
    mockUsePathname.mockImplementation(() => '/search');
  });

  it('should render all page title and all navigation options', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();

    menuOptions.forEach((option) => {
      expect(screen.getByRole('heading', { name: option })).toBeDefined();
    });
  });

  it('should navigate to the correct page on menu item press', () => {
    render(<Header />, { wrapper: MemoryRouterProvider });

    menuOptions.forEach((option) => {
      let heading = screen.getByRole('heading', { name: option });
      fireEvent.click(heading);
      expect(mockRouter.pathname).toEqual(`/${option.toLowerCase()}`);
    });
  });

  it('should highlight the correct element based on the current page', () => {
    render(<Header />, { wrapper: MemoryRouterProvider });
    let searchElement = screen.getByRole('heading', { name: 'Search' });
    let sortElement = screen.getByRole('heading', { name: 'Sort' });

    expect(searchElement).toHaveClass('text-blue-400');
    expect(sortElement).toHaveClass('text-stone-400');
  });
});
