import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { getModalInfo } from '../../redux/selectors/studentModal.selector';
import { ModeType } from '../../redux/slices/studentModalSlice';
import { setupStore } from '../../redux/store';
import { userMock } from '../../testing/mocks/user.mock';
import { renderWithProviders } from '../../testing/WrapperReduxTest';
import Table from '../Table';
describe('Table', () => {
  test('Table should be rendered', () => {
    renderWithProviders(<Table data={[]} />);
    expect(screen.getByTestId('table')).toBeDefined();
  });

  test('Table should show userMock data', () => {
    renderWithProviders(<Table data={[userMock]} />);
    expect(screen.getByText(userMock.name)).toBeDefined();
    expect(screen.getByText(userMock.email)).toBeDefined();
    expect(screen.getByText(userMock.username)).toBeDefined();
    expect(screen.getByText(userMock.phone)).toBeDefined();
  });

  test('Clicking info when should change modal state', () => {
    const store = setupStore();
    renderWithProviders(<Table data={[userMock]} />, { store });
    const icon = screen.getByTestId('info-icon');
    act(() => {
      fireEvent.click(icon);
    });
    expect(getModalInfo(store.getState()).show).toBeTruthy();
    expect(getModalInfo(store.getState()).mode).toBe(ModeType.VIEW);
  });
});
