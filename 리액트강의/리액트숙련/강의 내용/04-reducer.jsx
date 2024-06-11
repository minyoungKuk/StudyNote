import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counterReducer = useSelector((state) => {
    return state.counter;
  });

  console.log(counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <button
        onClick={() => {
          dispatch({
            type: "PLUS_ONE",
          });
        }}
      >
        {" "}
        +1{" "}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "MINUS_ONE",
          })
        }
      >
        {" "}
        -1{" "}
      </button>
    </div>
  );
};

export default App;
