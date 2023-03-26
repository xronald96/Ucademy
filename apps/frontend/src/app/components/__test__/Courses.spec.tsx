import { screen } from '@testing-library/react';
import { setModalInfo } from '../../redux/slices/studentModalSlice';
import Courses from '../Courses';
import { userMock } from '../../testing/mocks/user.mock';
import { renderWithProviders } from '../../testing/WrapperReduxTest';
import { setupStore } from '../../redux/store';
import { act } from 'react-dom/test-utils';

describe('Courses', () => {
  const store = setupStore();
  beforeEach(() => {
    renderWithProviders(<Courses />, { store });
  });
  test('Courses should be rendered', () => {
    expect(screen.getByTestId('courses')).toBeDefined();
  });
  test('Courses should not show items', () => {
    expect(screen.queryAllByTestId('course-item')).toStrictEqual([]);
  });

  test('Courses should show items', () => {
    act(() => {
      store.dispatch(
        setModalInfo({ data: userMock, show: false, mode: undefined })
      );
    });
    expect(screen.queryAllByTestId('course-item').length).toBe(
      userMock.courses.length
    );
  });

  test('data should be rendered', () => {
    act(() => {
      store.dispatch(
        setModalInfo({ data: userMock, show: false, mode: undefined })
      );
    });
    expect(screen.getByText(userMock.courses[0].title)).toBeDefined();
    expect(
      screen.getByText(`${userMock.courses[0].percentCompleted}%`)
    ).toBeDefined();
    expect(
      screen.getByText(
        `Fecha de inscripción ${userMock.courses[0].inscriptionDate.replaceAll('/', '-')}`
      )
    ).toBeDefined();
  });
});
