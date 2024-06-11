import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigagte = useNavigate();
  return (
    <div>
      <h1>Home componenet</h1>
      <button
        onClick={() => {
          navigagte("/works");
        }}
      >
        works로 이동
      </button>
    </div>
  );
};

export default Home;
