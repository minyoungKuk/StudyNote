// 액션 밸루
const ADD_TODO = "ADD_TODO";

// 액션 크리에이어 만들어서 익스포트
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
