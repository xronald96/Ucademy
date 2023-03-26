import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ModeType, setModalInfo } from '../../redux/slices/studentModalSlice';
import { setupStore } from '../../redux/store';
import { renderWithProviders } from '../../testing/WrapperReduxTest';
import Tab from '../Tab';

describe('Tab', () => {
  const store = setupStore();
  beforeEach(() => {
    renderWithProviders(<Tab />, { store });
  });
  test('Tab text should be rendered', () => {
    expect(screen.getByTestId('tab')).toBeDefined();
  });

  test('we text should se two tabs', () => {
    expect(screen.getAllByTestId('item-tab').length).toBe(2);
  });

  test('clicking in different tab whe should what the COURSES mode', () => {
    const tabs = screen.getAllByTestId('item-tab');
    act(() => {
      fireEvent.click(tabs[1]);
    });
    expect(store.getState().studentModal.mode).toBe(ModeType.COURSES);
  });

  test('clicking in course then profile we should stay in VIEW mode', () => {
    const tabs = screen.getAllByTestId('item-tab');

    fireEvent.click(tabs[1]);
    act(() => {
      fireEvent.click(tabs[0]);
    });
    expect(store.getState().studentModal.mode).toBe(ModeType.VIEW);
  });


  /*
    REVIEW TEST with reRender

    test('clicking in course then profile we should stay in NEW mode', () => {
        store.dispatch(
        setModalInfo({
            mode: ModeType.NEW,
            show: false,
        })
        );
        const tabs = screen.getAllByTestId('item-tab');

        fireEvent.click(tabs[1]);
        act(() => {
        fireEvent.click(tabs[0]);
        });
        expect(store.getState().studentModal.mode).toBe(ModeType.NEW);
    });
*/
});
