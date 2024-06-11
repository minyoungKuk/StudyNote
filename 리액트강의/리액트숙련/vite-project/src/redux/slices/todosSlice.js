import { createSlice } from "@reduxjs/toolkit";

// 스테이트 초기값
const initialState = [
  {
    id: 1,
    title: "react를 배워봅시다",
  },
  {
    id: 2,
    title: "redux를 배워봅시다",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
