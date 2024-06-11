import React, { useState } from "react";
import supabase from "../supabaseClient";

const UpdateData = () => {
  const [targetId, setTargetId] = useState(0);
  const [address, setAddress] = useState("");

  const handleChange = async () => {
    const { error } = await supabase
      .from("NACAMP_SAMPLE")
      .update({ address })
      .eq("id", targetId);

    if (error) {
      console.log("수정 error => ", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f9eb88", padding: "20px" }}>
      <h2>업데이트 데이터</h2>
      아이디 :{" "}
      <input
        type="text"
        value={targetId}
        onChange={(e) => {
          setTargetId(e.target.value);
        }}
      />{" "}
      <br />
      수정 주소 :{" "}
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <button onClick={handleChange}>수정</button>
    </div>
  );
};

export default UpdateData;
