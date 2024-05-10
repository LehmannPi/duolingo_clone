import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  it('should render sidebar', () => {
    render(<Sidebar />);
    const element = screen.getByText(/sidebar/i);
    expect(element).toBeInTheDocument();
  });
});
