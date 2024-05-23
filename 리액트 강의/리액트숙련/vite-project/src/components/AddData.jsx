import React, { useState } from "react";
import supabase from "../supabaseClient";

const AddData = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");

  const handleAdd = async () => {
    const { data, error } = await supabase
      .from("NACAMP_SAMPLE")
      .insert({ name, age, address });

    if (error) {
      console.log("insert error = >", error);
    } else {
      alert("정상적으로 추가 되었습니다");
      console.log("data = > ", data);
    }
  };

  return (
    <div style={{ backgroundColor: "#ededed", padding: "20px" }}>
      <h2>데이터 추가 로직</h2>
      <div>
        이름 :{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        나이 :{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />{" "}
        <br />
        주소 :{" "}
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button onClick={handleAdd}>등록</button>
      </div>
    </div>
  );
};

export default AddData;
