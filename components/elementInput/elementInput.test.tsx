import { fireEvent, render, screen } from '@testing-library/react';
import ElementInput from './elementInput';

describe('Element Input Tests', () => {
  it('should update values when user enters a single number input', () => {
    const testInputValue = '31';
    const existingState = [10, 12];
    let newState;
    const mockSetElements = jest.fn().mockImplementation((callback) => {
      newState = callback(existingState);
    });

    render(<ElementInput setElements={mockSetElements} />);

    const elementTextInput = screen.getByRole('textbox');
    fireEvent.change(elementTextInput, { target: { value: testInputValue } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit Values' }));

    expect(newState).toEqual(existingState.concat([31]));
  });

  it('should update values when user enters a comma seperated list of numbers', () => {
    const testInputValue = '7,9,6';
    const existingState = [10, 12];
    let newState;
    const mockSetElements = jest.fn().mockImplementation((callback) => {
      newState = callback(existingState);
    });

    render(<ElementInput setElements={mockSetElements} />);

    const elementTextInput = screen.getByRole('textbox');
    fireEvent.change(elementTextInput, { target: { value: testInputValue } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit Values' }));

    expect(newState).toEqual(existingState.concat([7, 9, 6]));
  });

  it('should display error message when user enters invalid input', () => {
    const testInputValue = 'invalid';
    const mockSetElements = jest.fn();

    render(<ElementInput setElements={mockSetElements} />);

    const elementTextInput = screen.getByRole('textbox');
    fireEvent.change(elementTextInput, { target: { value: testInputValue } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit Values' }));

    expect(
      screen.findByText(
        'Please ensure you enter a list of comma seperate integers',
      ),
    ).toBeDefined();
  });

  it('should clear existing values when clear button is pressed', () => {
    const mockSetElements = jest.fn();

    render(<ElementInput setElements={mockSetElements} />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Clear Existing Values' }),
    );

    expect(mockSetElements).toHaveBeenCalledWith([]);
  });
});
