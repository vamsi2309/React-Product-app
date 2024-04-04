import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface dark {
  isDarkMode?: boolean;
}
const initialState: dark = {
  isDarkMode: false,
};

export const darkMode = createSlice({
  name: "darkMode",
  initialState,

  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setDarkMode } = darkMode.actions;
export default darkMode.reducer;
