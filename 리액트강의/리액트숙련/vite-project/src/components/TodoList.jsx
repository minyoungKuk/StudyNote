import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.title} <button>삭제</button>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
