import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './header';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('next/router', () => require('next-router-mock'));

describe('Header tests', () => {
  const menuOptions = ['Sort', 'Search'];

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
      fireEvent.click(screen.getByRole('heading', { name: option }));
      expect(mockRouter.pathname).toEqual(`/${option.toLowerCase()}`);
    });
  });
});
