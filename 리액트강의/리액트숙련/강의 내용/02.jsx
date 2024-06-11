// useRef

import React, { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const pulsStateCountButtonHandler = () => {
    setCount(count + 1);
  };

  const pulsRefCountButtonHandler = () => {
    countRef.current++;
  };

  return (
    <div>
      <h1>useRef vs useState</h1>

      <div>
        state 영역 <br /> {count} <br />
        <button onClick={pulsStateCountButtonHandler}>state button</button>
      </div>
      <br />

      <div>
        ref 영역 <br /> {countRef.current} <br />
        <button onClick={pulsRefCountButtonHandler}>state button</button>
      </div>
    </div>
  );
};

export default App;
