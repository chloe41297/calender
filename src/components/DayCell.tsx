import React from "react";
import styled from "styled-components";

interface props {
  dateProp: number;
  isToday: boolean;
}
interface isTodayColor {
  isToday: boolean;
}

export default function DayCell({ dateProp, isToday }: props) {
  return (
    <Wrapper>
      <Bar isToday={isToday}></Bar>
      <Date isToday={isToday}>{dateProp}</Date>
      <Content>dddddddddddddddddddddd</Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
`;
const Bar = styled.div<isTodayColor>`
  width: 100%;
  height: 5px;
  background-color: ${(item) => (item.isToday ? "#ee5253" : "black")};
`;
const Date = styled.div<isTodayColor>`
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  color: ${(item) => (item.isToday ? "#ee5253" : "black")};
`;
const Content = styled.div`
  width: 100%;
  min-height: 200px;
  max-height: 300px;
  height: 100%;
  box-sizing: border-box;
  word-break: break-all;
`;
