import React from "react";
import styled from "styled-components";

interface props {
  dayProp: string;
  dateProp: number;
}

export default function DayCell({ dayProp, dateProp }: props) {
  return (
    <Wrapper>
      <Day>{dayProp}</Day>
      <Bar></Bar>
      <Date>{dateProp}</Date>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Day = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
`;
const Bar = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
`;
const Date = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
`;
