import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

const spyOnClick = jest.fn();
describe('Button', () => {
  beforeEach(() => {
    render(<Button text="Button" onClick={spyOnClick} />);
  });
  test('Button text should be rendered', () => {
    expect(screen.getByText('Button')).toBeDefined();
  });

  test('Icon should be rendered', () => {
    expect(screen.getByRole('img')).toBeDefined();
  });

  test('onClick should have be called ', () => {
    const button = screen.getByText('Button');
    fireEvent.click(button);
    expect(spyOnClick).toHaveBeenCalled();
  });
});
