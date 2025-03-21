import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  notification: {
    title: "",
    message: "",
    status: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showNotification(state, action) {
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
      state.notification.status = action.payload.status;
    },
    hideNotification(state) {
      state.notification.title = "";
      state.notification.message = "";
      state.notification.status = "";
    },
  },
});
export const { showNotification, hideNotification } = uiSlice.actions;
export default uiSlice;
