import React from "react";
import { FamilyContext } from "../context/familyContext";
import Father from "./Father";

const GrandFather = () => {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <FamilyContext.Provider
      value={{
        houseName,
        pocketMoney,
      }}
    >
      <Father />;
    </FamilyContext.Provider>
  );
};

export default GrandFather;
