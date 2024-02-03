import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface Statetype {
  count: number;
}
const initCount: Statetype = { count: 0 };
const counterslice = createSlice({
  name: "counter",
  initialState: initCount,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    Thala: (state) => {
      state.count += 7;
    },
    addit: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const store = configureStore({ reducer: counterslice.reducer });
export const { increment, decrement, Thala, addit } = counterslice.actions;
