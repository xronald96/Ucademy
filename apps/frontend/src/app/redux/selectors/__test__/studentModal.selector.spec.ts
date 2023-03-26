import { setupStore } from '../../store';
import { getModalInfo } from '../studentModal.selector';
import { ModeType, setModalInfo } from '../../slices/studentModalSlice';
describe('StudentModal selector', () => {
  const store = setupStore();
  test('we should see initial state', () => {
    expect(getModalInfo(store.getState())).toStrictEqual({
      mode: undefined,
      show: false,
      data: undefined,
    });
  });

  test('dispatch action should change store', () => {
    const newData = {
        mode: ModeType.NEW,
        show: true,
        data: undefined,
      }
    store.dispatch(setModalInfo(newData))
    expect(getModalInfo(store.getState())).toStrictEqual(newData);
  });
});
