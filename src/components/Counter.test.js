import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Counter from './Counter';

afterEach(cleanup);

test("the Counter component renders", () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId('counter-button');
    expect(buttonElement).toBeInTheDocument();
});

test("the Counter component with fire event", () => {
    const { getByTestId } = render(<Counter />);
    const counterButton = getByTestId('counter-button');
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');
});