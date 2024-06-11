import styled from "styled-components";
import "./App.css";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000000;
  border: 2px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const boxList = ["#d8a8ca", "#3b754d", "#3b5d75"];

const getBoxName = (color) => {
  switch (color) {
    case "#d8a8ca":
      return "분홍 박스";
    case "#3b754d":
      return "초록 박스";
    case "#3b5d75":
      return "파란 박스";
    default:
      "파란 박스";
  }
};

function App() {
  return (
    <>
      {boxList.map((boxColor) => {
        return (
          <StBox key={boxColor} borderColor={boxColor}>
            {" "}
            {getBoxName(boxColor)}{" "}
          </StBox>
        );
      })}
    </>
  );
}

export default App;
