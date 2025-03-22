import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = authSlice.actions;
export default authSlice.reducer;
