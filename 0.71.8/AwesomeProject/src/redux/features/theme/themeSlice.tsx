import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type MainTheme = 'light' | 'dark';

export interface CounterState {
  mainValue: MainTheme;
}

const initialState: CounterState = {
  mainValue: 'light'
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<MainTheme>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mainValue = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setTheme } = counterSlice.actions;

export default counterSlice.reducer;
