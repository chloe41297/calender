import React from "react";
import styled from "styled-components";

export default function MonthHeader() {
  return (
    <Wrapper>
      <MainTitle>Apr</MainTitle>
      <MainTitle>2022</MainTitle>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-right: 40px;
`;
