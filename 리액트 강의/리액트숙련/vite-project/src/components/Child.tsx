import React, { useContext } from "react";
import { FamilyContext } from "../context/familyContext";

const Child = () => {
  const stressesWord = {
    color: "gold",
    fontWeight: "900",
  };

  const { houseName, pocketMoney } = useContext(FamilyContext);

  return (
    <div>
      나는 이 집안의 막내에용 <br />
      할아버지가 우리집 이름은 <span style={stressesWord}> {houseName} </span>
      라고 하셨어요
      <br />
      게다가 용돈도 <span style={stressesWord}> {pocketMoney} </span>원
      주셨답니다
    </div>
  );
};

export default Child;
