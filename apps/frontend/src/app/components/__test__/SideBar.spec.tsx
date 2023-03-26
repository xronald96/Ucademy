import { render, screen } from '@testing-library/react';
import SideBar from '../SideBar';

describe('SideBar', () => {
  beforeEach(() => {
    render(<SideBar />);
  });
  test('SideBar should be rendered', () => {
    expect(screen.getByTestId('side-bar')).toBeDefined();
  });

  test('option with should be rendered', () => {
    expect(screen.getByTestId('dashboard-icon')).toBeDefined();
    expect(screen.getByText('Dashboard')).toBeDefined();
  });
});
