import React from "react";
import styled from "styled-components";
import DayCell from "./DayCell";

export default function DayGrid() {
  const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const DATES = new Array(7).fill(null);
  const TODAY = new Date();
  // console.log(TODAY.getDay());
  return (
    <Wrapper>
      {DAYS.map((day, i) => (
        <DayCell dayProp={day} dateProp={DATES[i]}></DayCell>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 3%;
  text-align: left;
  margin-top: 40px;
`;
