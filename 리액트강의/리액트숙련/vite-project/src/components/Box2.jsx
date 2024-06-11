import React from "react";

const Box2 = () => {
  console.log("Box2이 랜더링 되었습니다");

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        color: "#fff",
        backgroundColor: "#6c76d1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Box2
    </div>
  );
};

export default Box2;
