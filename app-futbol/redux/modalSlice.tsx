import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { modalStatus } from '../types/modal';

const initialState: modalStatus = {
  modal: false,
};



export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
setIsModal: (state, action: PayloadAction<boolean>) => {
  state.modal = action.payload;
}}
});


export const { setIsModal} = modalSlice.actions;

export const setIsModalopen = (state: RootState) => state.modal.modal

export default modalSlice.reducer;