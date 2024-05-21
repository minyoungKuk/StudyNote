import React from "react";

const Box3 = () => {
  console.log("Box3이 랜더링 되었습니다");

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        color: "#fff",
        backgroundColor: "#dc6e5b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Box3
    </div>
  );
};

export default React.memo(Box3);
