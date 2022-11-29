import { createSlice } from '@reduxjs/toolkit';

interface Theme {themes: 'light' | 'dark'}
const initialState: Theme = {
  themes: 'light',
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.themes = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
