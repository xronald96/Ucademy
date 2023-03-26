import { fireEvent, screen } from '@testing-library/react';
import { setModalInfo } from '../../redux/slices/studentModalSlice';
import { setupStore } from '../../redux/store';
import { userMock } from '../../testing/mocks/user.mock';
import { renderWithProviders } from '../../testing/WrapperReduxTest';
import FormEditNew from '../FormEditNew';
import { WrapperUseForm } from '../../testing/WrapperUseForm';
import { act } from 'react-dom/test-utils';
describe('FormEdit', () => {
  const store = setupStore();
  beforeEach(() => {
    renderWithProviders(
      <WrapperUseForm>
        <FormEditNew />
      </WrapperUseForm>,
      { store }
    );
  });

  describe('Mode new', () => {
    test('Form should be rendered', () => {
      expect(screen.getByTestId('form-edit-new')).toBeDefined();
    });

    test('we should see 5 inputs rendered', () => {
      expect(screen.getAllByRole('textbox').length).toBe(5);
    });

    test('inputs should be empties', () => {
      screen.getAllByRole('textbox').forEach((element: any) => {
        expect(element.value).toBe('');
      });
    });

    test('we should fill inputs ', () => {
      screen.getAllByRole('textbox').forEach((element: any) => {
        fireEvent.change(element, { target: { value: 'text' } });
        expect(element.value).toBe('text');
      });
    });
  });

  describe('Mode edit', () => {
    beforeEach(() => {
      act(() => {
        store.dispatch(
          setModalInfo({ data: userMock, show: false, mode: undefined })
        );
      });
    });

    test('Form should be rendered', () => {
      expect(screen.getByTestId('form-edit-new')).toBeDefined();
    });

    test('we should see inputs prepopulated', () => {
      screen.getAllByRole('textbox').forEach((element: any) => {
        const key: 'name' | 'phone' | 'email' | 'lastName' | 'username' =
          element.name !== 'lastname' ? element.name : ' lastName';
        expect(element.value || '').toBe(userMock[key] || '');
      });
    });
  });
});
