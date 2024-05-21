import React from "react";

const Box1 = ({ initCount }) => {
  console.log("Box1이 랜더링 되었습니다");

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        color: "#fff",
        backgroundColor: "#91c49f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          initCount();
        }}
      >
        초기화
      </button>
    </div>
  );
};

export default React.memo(Box1);
