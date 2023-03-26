import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  test('Navbar should be rendered', () => {
    expect(screen.getByRole('img')).toBeDefined();
  });
});
