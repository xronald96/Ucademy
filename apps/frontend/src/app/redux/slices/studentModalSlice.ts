import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum ModeType {
  VIEW = 'view',
  EDIT = 'edit',
  NEW = 'new',
  COURSES = 'courses',
}
interface ModalMode {
  mode: ModeType | undefined;
  show: boolean;
  data?: any;
}

const initialState: ModalMode = {
  mode: undefined,
  show: false,
  data: undefined,
};

export const studentModalSlice = createSlice({
  name: 'studentModal',
  initialState,
  reducers: {
    setModalInfo: (state, action: PayloadAction<ModalMode>) => {
      state.mode = action.payload.mode;
      state.show = action.payload.show;
      state.data = action.payload.data;
    },
  },
});

export const { setModalInfo } = studentModalSlice.actions;

export default studentModalSlice.reducer;
