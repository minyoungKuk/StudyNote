import React, { useState } from "react";
import supabase from "../supabaseClient";

const UpdateData = () => {
  const [targetId, setTargetId] = useState(0);

  const handleDelete = async () => {
    const { error } = await supabase
      .from("NACAMP_SAMPLE")
      .delete()
      .eq("id", targetId);

    if (error) {
      console.log("수정 error => ", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f9eb88", padding: "20px" }}>
      <h2>삭제할 데이터</h2>
      아이디 :{" "}
      <input
        type="text"
        value={targetId}
        onChange={(e) => {
          setTargetId(e.target.value);
        }}
      />
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default UpdateData;
