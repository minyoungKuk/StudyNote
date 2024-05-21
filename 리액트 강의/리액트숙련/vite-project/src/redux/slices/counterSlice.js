import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    removerNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, removerNumber } = counterSlice.actions;

export default counterSlice.reducer;
