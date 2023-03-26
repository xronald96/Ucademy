import { setupStore } from '../../redux/store';
import { userMock } from '../../testing/mocks/user.mock';
import { renderWithProviders } from '../../testing/WrapperReduxTest';
import FormView from '../FormView';
import { WrapperUseForm } from '../../testing/WrapperUseForm';
import { screen } from '@testing-library/react';
describe('FormView', () => {
  const store = setupStore();
  beforeEach(() => {
    renderWithProviders(
      <WrapperUseForm>
        <FormView data={userMock} />
      </WrapperUseForm>,
      { store }
    );
  });

  test('formView sholb be rendered', () => {
    expect(screen.getByTestId('form-view')).toBeDefined();
  });

  test('we should see the user info rendered', () => {
    expect(screen.getByText(userMock.name)).toBeDefined();
    expect(screen.getByText(userMock.email)).toBeDefined();
    expect(screen.getByText(userMock.username)).toBeDefined();
    expect(screen.getByText(userMock.phone)).toBeDefined();
  });
});
