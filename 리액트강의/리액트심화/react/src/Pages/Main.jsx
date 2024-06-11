import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import userBearsStore from "../zustand/bearsStore";

const Main = () => {
  const { bears, increase, init } = userBearsStore((state) => state);

  const queryClient = useQueryClient();
  const [todoItem, setTodoItem] = useState("");

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data;
  };

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isPending) return <div> Loading.. </div>;
  if (isError) return <div> Error.. </div>;

  return (
    <div>
      <Link to="/empty">빈 페이지로</Link>
      <h4> {bears} </h4>
      <button onClick={increase}> +1 </button>
      <button onClick={init}> 초기화 </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newTodoObj = { title: todoItem, isDone: false };

          mutate(newTodoObj);
        }}
      >
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button>추가</button>
      </form>

      <h2>tanstack query</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.isDone ? "Done" : "Not Done"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
