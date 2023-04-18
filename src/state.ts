import { configureStore, createSlice } from '@reduxjs/toolkit';

const messageBoxSlice = createSlice({
  name: 'message',
  initialState: '',
  reducers: {
    addMessage(state, action) {
      state = action.payload;
    },
    removeMessage(state, action) {
      state = '';
    },
  },
});

const store = configureStore({
  reducer: {
    message: messageBoxSlice.reducer,
  },
});

export const { addMessage, removeMessage } = messageBoxSlice.actions;
export { store };
