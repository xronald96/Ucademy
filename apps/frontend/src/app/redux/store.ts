import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import studentModalSlice from './slices/studentModalSlice';

const rootReducer = combineReducers({
  studentModal: studentModalSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']