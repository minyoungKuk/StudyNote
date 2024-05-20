import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Contents = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 1px auto;
  max-width: 400px;
`;

const TestPage = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
    </Wrapper>
  );
};

export default TestPage;
